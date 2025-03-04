import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // First, create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    // Then, create the user profile in our database
    const { data: userData, error: userError } = await supabase
      .from('User')
      .insert({
        id: authData.user.id,
        firstName,
        lastName,
        email,
        password: 'SUPABASE_AUTH', // We don't store the actual password as it's managed by Supabase Auth
        createdAt: new Date().toISOString(),
      })
      .select()
      .single();

    if (userError) {
      // Rollback auth user creation if profile creation fails
      await supabase.auth.admin.deleteUser(authData.user.id);
      
      return NextResponse.json(
        { error: userError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully", user: userData },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to register user" },
      { status: 500 }
    );
  }
}
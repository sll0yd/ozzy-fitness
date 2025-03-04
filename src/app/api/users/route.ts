import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser, isAuthenticated } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

// Get current user profile
export async function GET(req: NextRequest) {
  try {
    const isAuth = await isAuthenticated();
    
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
    // Get detailed user information from database
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        membership: true,
        payments: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 5
        }
      }
    });
    
    if (!userData) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
    // Remove sensitive information
    const { password, ...userWithoutPassword } = userData;
    
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// Update user profile
export async function PATCH(req: NextRequest) {
  try {
    const isAuth = await isAuthenticated();
    
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Parse form data (for avatar upload)
    const formData = await req.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const avatarFile = formData.get('avatar') as File | null;
    
    // Handle avatar upload to Supabase Storage
    let avatarUrl = undefined;
    if (avatarFile) {
      const fileName = `${user.id}-${Date.now()}.${avatarFile.name.split('.').pop()}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatarFile, {
          cacheControl: '3600',
          upsert: true
        });
      
      if (uploadError) {
        console.error("Error uploading avatar:", uploadError);
        return NextResponse.json(
          { error: "Failed to upload avatar" },
          { status: 500 }
        );
      }
      
      // Get the public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
      
      avatarUrl = urlData.publicUrl;
    }
    
    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(avatarUrl && { avatar: avatarUrl }),
      },
    });
    
    // Also update Supabase Auth user metadata
    if (firstName || lastName || avatarUrl) {
      await supabase.auth.updateUser({
        data: {
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
          ...(avatarUrl && { avatar: avatarUrl }),
        }
      });
    }
    
    // Remove sensitive information
    const { password, ...userWithoutPassword } = updatedUser;
    
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
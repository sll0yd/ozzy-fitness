import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { add } from "date-fns";

// Get user payments
export async function GET(req: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    // Get all payments for the user
    const { data: payments, error } = await supabase
      .from('Payment')
      .select(`
        *,
        membership:Membership(*)
      `)
      .eq('user_id', session.user.id)
      .order('createdAt', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return NextResponse.json(payments);
  } catch (error: any) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch payments" },
      { status: 500 }
    );
  }
}

// Create a new payment for a membership
export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { membershipId } = await req.json();
    
    if (!membershipId) {
      return NextResponse.json(
        { error: "Membership ID is required" },
        { status: 400 }
      );
    }
    
    // Find the membership
    const { data: membership, error: membershipError } = await supabase
      .from('Membership')
      .select('*')
      .eq('id', membershipId)
      .single();
    
    if (membershipError || !membership) {
      return NextResponse.json(
        { error: "Membership not found" },
        { status: 404 }
      );
    }
    
    // In a real application, you would integrate with a payment provider here
    // For now, we'll simulate a successful payment
    
    // Get user details to check current membership end date
    const { data: user, error: userError } = await supabase
      .from('User')
      .select('membershipEndDate')
      .eq('id', session.user.id)
      .single();
    
    if (userError) {
      throw userError;
    }
    
    let newEndDate;
    
    if (user?.membershipEndDate && new Date(user.membershipEndDate) > new Date()) {
      // If user has an active membership, extend it
      newEndDate = add(new Date(user.membershipEndDate), { months: membership.duration });
    } else {
      // Otherwise, start a new membership period
      newEndDate = add(new Date(), { months: membership.duration });
    }
    
    // Create payment record
    const { data: payment, error: paymentError } = await supabase
      .from('Payment')
      .insert({
        user_id: session.user.id,
        membership_id: membershipId,
        amount: membership.price,
        status: 'Completed', // In a real app, this would initially be "Pending"
        createdAt: new Date().toISOString(),
      })
      .select()
      .single();
    
    if (paymentError) {
      throw paymentError;
    }
    
    // Update user's membership
    const { error: updateError } = await supabase
      .from('User')
      .update({
        membership_id: membershipId,
        membershipEndDate: newEndDate.toISOString(),
      })
      .eq('id', session.user.id);
    
    if (updateError) {
      throw updateError;
    }
    
    return NextResponse.json(
      { 
        message: "Payment successful",
        payment,
        membershipEndDate: newEndDate
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process payment" },
      { status: 500 }
    );
  }
}
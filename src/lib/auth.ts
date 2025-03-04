import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getSession() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getCurrentUser() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }
  
  // Fetch additional user data from the database
  const supabase = createClient();
  const { data: userData, error } = await supabase
    .from('User')
    .select('*, membership:Membership(*)')
    .eq('id', session.user.id)
    .single();
  
  if (error || !userData) {
    return null;
  }
  
  return {
    ...session.user,
    ...userData
  };
}

export async function isAuthenticated() {
  const session = await getSession();
  return !!session?.user;
}

export async function isMembershipActive() {
  const user = await getCurrentUser();
  
  if (!user || !user.membership_id || !user.membershipEndDate) {
    return false;
  }
  
  const endDate = new Date(user.membershipEndDate);
  return endDate > new Date();
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  cookies().delete('supabase-auth-token');
  redirect('/login');
}

export async function requireAuth() {
  const isAuth = await isAuthenticated();
  
  if (!isAuth) {
    redirect('/login');
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

// List of paths that require authentication
const protectedPaths = [
  '/dashboard',
  '/profile',
  '/membership',
  '/classes',
  '/api/users',
  '/api/memberships',
  '/api/payments',
];

// List of paths that should be accessible only by non-authenticated users
const authPaths = [
  '/login',
  '/register',
];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Create a Supabase client using the request headers
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Get the user's session
  const { data: { session } } = await supabase.auth.getSession();
  const isAuthenticated = !!session;
  const path = request.nextUrl.pathname;
  
  // Check if the path is protected and user is not authenticated
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path === protectedPath || path.startsWith(`${protectedPath}/`)
  );
  
  if (isProtectedPath && !isAuthenticated) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  
  // Check if the path is meant for non-authenticated users and user is authenticated
  const isAuthPath = authPaths.some(authPath => 
    path === authPath || path.startsWith(`${authPath}/`)
  );
  
  if (isAuthPath && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
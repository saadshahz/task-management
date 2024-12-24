import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        const pathname = request.nextUrl.pathname;
        const user = request.nextauth.token?.user;
      
        // Redirect unauthenticated users trying to visit the home page
        if (pathname === '/' && !user) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        if (pathname === '/' && user) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        // Redirect authenticated users trying to visit the login page
        if (pathname === '/login' && user) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        // Redirect unauthenticated users trying to visit the dashboard
        if (pathname === '/dashboard' && !user) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
);

export const config = {
    matcher: [
        '/',  // Home page
        '/dashboard/:path*'
    ]
};

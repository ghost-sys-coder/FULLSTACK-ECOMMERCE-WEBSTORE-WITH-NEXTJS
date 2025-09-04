import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { pathname } = request.nextUrl;


    // If the user is already signed in, redirect to home page

    const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
    if (session && isAuthPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Protecting Admin dashboard routes
    if (session && pathname.startsWith("/admin")) {
        console.log("User Role:", session.user);
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // If the user is not signed in, redirect to sign-in page
    if (!session && pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    runtime: "nodejs",
    matcher: ["/profile/:path*",
        "/sign-in", "/sign-up"
    ],
}
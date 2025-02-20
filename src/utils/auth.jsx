"use client"

import Link from "next/link";
import { useAuth } from "@/context/authContext";

export default function AuthButtons() {
    const { hasAccess } = useAuth();

    // Return the button depending if user is logged in    
    return hasAccess ? (
        <Link href='/dashboard' className='button-rounded and-border show'>Dashboard</Link>
    ) : (
        <Link href='/login' className='button-rounded and-border show'>Login</Link>
    );
}
"use client"

import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { ArrowRightEndOnRectangleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function AuthButtons() {
    const { user, hasAccess } = useAuth();

    // Return the button depending if user is logged in    
    return hasAccess && user ? (
        <Link href={`/dashboard/${user.id}`} className='links show'>
            <UserCircleIcon width={24} display={'block'} />
        </Link>
    ) : (
        <Link href='/login' className='links show'>
            <ArrowRightEndOnRectangleIcon width={24} display={'block'} />
        </Link>
    );
}
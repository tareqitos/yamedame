"use client"

import { useAuth } from "@/context/authContext";
import logout from "@/lib/logout"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Dashboard() {
    const {hasAccess, checkAccess} = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        const result = await logout()
        localStorage.removeItem('hasAccess')
        console.log(result.message)
        checkAccess()
        router.refresh();
        router.push('/');
    }

    useEffect(() => {
        checkAccess()
    }, [])

    return (
        <>
        {hasAccess ? 
        <div>
            <p>Welcome to your profile!</p>
            <button onClick={handleLogout}>Log out</button>
        </div> : <p>Need to login to access this page</p>}
        </>
    )
}
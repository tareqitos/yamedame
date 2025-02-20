"use client"

import { useAuth } from "@/context/authContext";
import logout from "@/lib/logout"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Dashboard() {
    const {hasAccess, user, checkAccess} = useAuth();
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
        <div style={{textAlign: 'center', marginTop: '100px'}}>
            <p style={{textAlign: 'center', fontSize: '2em', marginBottom: '20px'}}>Welcome to your profile, {user.username}!</p>
            <button className='button-rounded and-hover' style={{fontSize: '1.2em'}} onClick={handleLogout}>Log out</button>
        </div> : <p>Need to login to access this page</p>}
        </>
    )
}
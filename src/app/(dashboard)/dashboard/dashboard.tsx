"use client"

import { useAuth } from "@/context/authContext";
import { logout } from "@/app/api/api";
import { useRouter } from "next/navigation"

interface Props {
    id: number;
}

export default function Dashboard({id}: Props) {
    const {hasAccess, user, checkAccess} = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout()
        localStorage.removeItem('hasAccess')
        checkAccess()
        router.refresh();
        router.push('/');
    }

    return (
        <>
        {hasAccess && user ? 
        <div style={{textAlign: 'center', marginTop: '100px'}}>
            <p style={{textAlign: 'center', fontSize: '2em', marginBottom: '20px'}}>Welcome to your profile, {user.username}! #{id}</p>
            <button className='button-rounded and-hover' style={{fontSize: '1.2em'}} onClick={handleLogout}>Log out</button>
        </div> : <p>Need to login to access this page</p>}
        </>
    )
}
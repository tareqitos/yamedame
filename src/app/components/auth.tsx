"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginButton() {

    const [cookieExists, setCookieExists] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/users/logout', {
                credentials: 'include',
            });
            const result = await response.json();
            if (response.ok) {
                setCookieExists(false);
                console.log('Logout successfull!');
                router.push('/');
            } else {
                console.log(result.message) 
            }

        } catch (err) {
            console.error('Error during logout: ', err)
        }
    }

    useEffect(() => {
        //Check if cookie exists
        const cookie = Cookies.get()
        if (cookie) { 
            setCookieExists(true); 
        } else { 
            setCookieExists(false)
        }
        console.log(cookie)
    }, [])

    return (
        <>
            <Link href='/login' className="button-rounded and-border">Login</Link>
            {cookieExists ? <Link onClick={handleLogout} href='' className="button-rounded and-border">Logout</Link> : null}
        </>
    )
}
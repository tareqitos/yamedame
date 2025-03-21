"use client"

interface Props {
    token: string;
}

import { registerVerifyAccount } from "@/app/api/api";
import '@/styles/auth.scss'
import Link from "next/link";
import { useCallback, useEffect, useState } from "react"

export default function VerifyAccountClient({ token }: Props) {
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')

    const verifyAccount = useCallback(async () => {
        try {
            const { response, result } = await registerVerifyAccount(token)
            if (response.status == 200) {
                setSuccess(true)
                setMessage(result.message);
            }

        } catch (err) {
            console.error('Could not verify account: ', err);
        }
    }, [token])

    useEffect(() => {
        verifyAccount();
    }, [verifyAccount])

    return (
        

            <div className={`register-login-container`}>
                <div className="register-confirmation">
                    <p className="title">{success ? `${message}! 🎉` : 'User already registered'}</p>
                    <div className="registration-buttons">
                        <Link href={'/'} className="button-rounded and-border and-background">Home</Link>
                        <Link href={'/login'} className="button-rounded and-border and-background">Login</Link>
                    </div>
                </div>
            </div>

    )
}
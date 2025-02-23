"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/lib/auth-api";

interface Props {
    token: string;
}

export default function ResetPassword({ token }: Props) {
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [showVerify, setShowVerify] = useState(false);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);

    const router = useRouter()

    const handleResetPassword = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { response, result } = await resetPassword(password, verifyPassword, token);

            if (response.ok) {
                setSuccess(true)
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before redirecting to homepage
                setShowVerify(true);
                router.refresh();
            } else {
                setError(true);
                setMessage(result.message);
                setErrorMessage(result.errors)
            }

        } catch (err) {
            console.error('Failed to reset password: ', err)
        }
    }


    return (
        <div className={`register-login-container ${success ? 'validation' : error ? 'error' : ''}`}>
            {showVerify ?
                <div className="register-confirmation">
                    <p className="title">Password changed successfully! 🎉</p>
                    <div className="registration-buttons">
                        <Link href={'/'} className="button-rounded and-border and-background">Home</Link>
                        <Link href={'/login'} className="button-rounded and-border and-background">Login</Link>
                    </div>
                </div> :
                <form onSubmit={handleResetPassword} className="register-login-form">
                    <h3 className="title">Reset your password</h3>
                    <div className="field-container">
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="verify-password">Verify Password</label>
                            <input
                                type="password"
                                id="verify-password"
                                value={verifyPassword}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                required
                            />
                        </div>

                        {errorMessage && errorMessage.length > 0 && errorMessage.map((message) => (
                            <p key={message} className={`register-login-message ${success ? 'validation' : error ? 'error' : ''}`}>{message}</p>
                        ))}

                        <p className={`register-login-message ${success ? 'validation' : error ? 'error' : ''}`}>{!success ?
                            message : ''}</p>

                        <p className="reset-password-message">Link expired? Request a new one <Link href='/forgot-password'>here</Link></p>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="button-rounded and-border and-background"> Reset </button>
                    </div>
                </form>
            }
        </div>
    )
}
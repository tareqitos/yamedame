"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/auth-api";

export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [showVerify, setShowVerify] = useState(false);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);

    const router = useRouter()

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { response, result } = await registerUser(email, username, password, verifyPassword);

            if (response.ok) {
                setSuccess(true)
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait before redirecting to homepage
                setShowVerify(true);
                router.refresh();
            } else {
                setError(true);
                setMessage(result.message);
                setErrorMessage(result.errors)
            }

        } catch (err) {
            console.error('Error during registration: ', err)
        }

    }


    return (
        <div className={`register-login-container ${success ? 'validation' : error ? 'error' : ''}`}>
            {showVerify ?
                <div className="register-confirmation">
                    <p className="title">Welcome to <span>やめだめ!</span> 🎉</p>
                    <p>A confirmation e-mail has been sent to your inbox</p>
                    <div className="registration-buttons">
                        <Link href={'/'} className="button-rounded and-border and-background">Home</Link>
                        <Link href={'/login'} className="button-rounded and-border and-background">Login</Link>
                    </div>
                </div> :
                <form onSubmit={handleRegister} className="register-login-form">
                    <h3 className="title">Sign up</h3>
                    <div className="field-container">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
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
                            message : 'Welcome to やめだめ!'}</p>

                    </div>
                    <div className="button-container">
                        <button
                            type="submit" className="button-rounded and-border and-background">
                            Register
                        </button>
                    </div>
                    <div>Already have an account? <Link href='/login'>Login</Link></div>
                </form>
            }
        </div>
    )
}
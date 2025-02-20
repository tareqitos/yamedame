"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api";
import { useAuth } from "@/context/authContext";


export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter()
    const { checkAccess } = useAuth();


    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { response, result } = await registerUser(email, username, password, verifyPassword);

            if (response.ok) {
                setSuccess(true)
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait before redirecting to homepage
                checkAccess();
                router.refresh();
                router.push('/login');
            } else {
                setError(true);
                setMessage(result.message);
                setErrorMessage(result.errors)
            }

            console.log(message)

        } catch (err) {
            console.error('Error during registration: ', err)
        }

        console.log('Registering:', { email, username, password, verifyPassword });
    }


    return (
        <div className={`register-login-container ${success ? 'validation' : error ? 'error' : ''}`}>
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
        </div>
    )
}
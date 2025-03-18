"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import '@/styles/resources.scss'
import '@/styles/feedback.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { loginUser } from "@/app/api/api";
import { loginCookie } from "@/app/api/cookies";


export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter()
    const { checkAccess } = useAuth();



    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { response, result } = await loginUser(email, password);

            if (response.ok) {
                setLoading(false)
                setSuccess(true)

                loginCookie(result.refreshToken);

                localStorage.setItem("accessToken", result.token);
                localStorage.setItem("hasAccess", "true");
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait before redirecting to homepage
                checkAccess();
                router.refresh();
                router.push('/')
            } else {
                setError(true);
                setMessage(result.message || result.errors);
            }

        } catch (err) {
            console.error('Error during registration: ', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`register-login-container ${success ? 'validation' : error ? 'error' : ''}`}>
            <form onSubmit={handleLogin} className="register-login-form">
                <h3 className="title">Login</h3>
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {loading ? <p className="loading feedback-loading" style={{width: 'fit-content'}}>中</p> :
                        <>
                            <p className="reset-password-message">Password gone? <Link href='/forgot-password'>Get a new one!</Link></p>
                            <p className={`register-login-message ${success ? 'validation' : error ? 'error' : ''}`}>{!success ?
                                message : 'Happy to see you!'}</p>
                        </>
                    }
                </div>
                <div className="button-container">
                    <button type="submit" className="button-rounded and-border and-background">
                        Login
                    </button>
                </div>
                <div>New here? <Link href='/register'>Sign up!</Link></div>
            </form>
        </div>
    )
}
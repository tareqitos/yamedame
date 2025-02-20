"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { loginUser } from "@/lib/api";

export default function UserLogin() {
    const [email, setEmail] = useState('test@test');
    const [password, setPassword] = useState('test');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter()
    const {hasAccess, checkAccess } = useAuth();


    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const {response, result} = await loginUser(email, password);
            
            if (response.ok) {
                setSuccess(true)
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

            console.log(result)

        } catch (err) {
            console.error('Error during registration: ', err)
        }

        console.log('Login:', { email, password });
    }

    return (
        <div className={`register-login-container ${success ? 'validation': error ? 'error' : ''}`}>
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
                    <p className={`register-login-message ${success ? 'validation': error? 'error': ''}`}>{!success ? 
                    message : 'Happy to see you back!'}</p>
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
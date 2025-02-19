"use client"

import { useState } from "react";
import '@/styles/modal.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function UserLogin() {
        const [email, setEmail] = useState('test@test');
        const [password, setPassword] = useState('test');
        const [message , setMessage] = useState('');
        const router = useRouter()
    
    
        const handleLogin = async (e: {preventDefault: () => void;}) => {
            e.preventDefault();
            try {
                const response = await fetch("http://localhost:4000/users/login", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ email, password}),
                    credentials: "include",
                });
    
                const result = await response.json();
                console.log(result)
                if (response.ok) {
                    localStorage.setItem("accessToken", result.token);
                    router.push('/');
                } else {
                    setMessage(result.message || result.errors);
                }
    
                console.log(result)
    
            } catch(err) {
                console.error('Error during registration: ', err)
            }
    
            console.log('Login:', { email, password });
        }
    
    return (
        <div className="register-login-container">
            <form onSubmit={handleLogin} className="register-login-form">
                <h3 className="title">Login</h3>
                <p>{message}</p>
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
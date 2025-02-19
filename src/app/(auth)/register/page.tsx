"use client"

import { useState } from "react";
import '@/styles/modal.scss'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [message , setMessage] = useState('');
    const router = useRouter()


    const handleRegister = async (e: {preventDefault: () => void;}) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/users/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ email, username, password, verifyPassword}),
            });

            const result = await response.json();
            if (response.ok) {
                router.push('/login');
            } else {
                setMessage(result.message || result.errors);
            }

            console.log(result)

        } catch(err) {
            console.error('Error during registration: ', err)
        }

        console.log('Registering:', { email, username, password, verifyPassword });
    }


    return (
        <div className="register-login-container">
            <form onSubmit={handleRegister} className="register-login-form">
                <h3 className="title">Sign up</h3>
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
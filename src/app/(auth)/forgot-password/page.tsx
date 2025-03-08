"use client"

import { useState } from "react";
import '@/styles/auth.scss'
import '@/styles/resources.scss'
import '@/styles/feedback.scss'
import Link from "next/link";
import { forgotPassword } from "@/app/api/api";


export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)


    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string[]>([]);

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { response, result } = await forgotPassword(email);

            if (response.ok) {
                setLoading(false)
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before redirecting to homepage
                setSuccess(true)

            } else {
                setError(true);
                setMessage(result.message);
                setErrorMessage(result.errors)
            }

        } catch (err) {
            console.error('Error sending email: ', err)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className={`register-login-container ${success ? 'validation' : error ? 'error' : ''}`}>
            <form onSubmit={handleRegister} className="register-login-form">
                <h3 className="title">Password Reset</h3>
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

                    {errorMessage && errorMessage.length > 0 && errorMessage.map((message) => (
                        <p key={message} className={`register-login-message ${success ? 'validation' : error ? 'error' : ''}`}>{message}</p>
                    ))}

                    {loading ? <p className="loading feedback-loading" style={{ width: 'fit-content' }}>中</p> :
                        <p className={`register-login-message ${success ? 'validation' : error ? 'error' : ''}`}>{!success ?
                            message : 'A verification email has been sent to your inbox'}</p>
                    }

                </div>
                <div className="button-container">
                    <button
                        type="submit" className="button-rounded and-border and-background">
                        Send
                    </button>
                </div>
                <div>Back to <Link href='/login'>Login</Link></div>
            </form>

        </div>
    )
}
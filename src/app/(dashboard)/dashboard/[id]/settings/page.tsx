"use client"

import '@/styles/auth.scss'

export default function UserSettings() {
    return (
        <>
            <div className="settings-wrapper">
                <h1>Settings</h1>
                <div className="settings-container">
                    <form className="register-login-form">
                        <h3 className="title">Change email</h3>
                        <div className="field-container">
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="button-container">
                            <button
                                type="submit" className="button-rounded and-border and-background">
                                Change email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
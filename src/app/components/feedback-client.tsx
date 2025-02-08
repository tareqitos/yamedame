"use client"

import { useState } from "react";

interface FeedbackProps {
    title: string;
    categories: string[];
    sendFeedback: any;
}


export default function FeedbackClient({ title, categories, sendFeedback }: FeedbackProps) {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState("");
    const [succes, setSucces] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setMessage("")
        setSucces("")
        const formData = new FormData(event.currentTarget);

        setIsLoading(true);
        try {
            await sendFeedback(formData);
            setMessage("Thank you for your contribution! 🚀")
        } catch (err) {
            setIsLoading(false)
            setMessage("Sorry, the server couldn't be reached ⚠️ ")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="feedback-button-container">
                <a onClick={() => !isActive ? setIsActive(true) : setIsActive(false)} href="#feedback" className="button-rounded button-padding-10-15">💡 Send a suggestion</a>
            </div>

            <div className={`feedback-form-container ${isActive ? 'active' : 'hidden'}`}>
                <h2 className='feedback-title'>{title}</h2>
                <hr />
                {isLoading ? <p className="loading feedback-loading">中</p> : 
                    message && <p className="feedback-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <select name="category" id="" defaultValue="">
                        {categories.map((category, i) => (
                            <option key={i} value={category}>{category}</option>
                        ))}
                    </select>
                    <div className="feedback-inputs">
                        <input name="name" type="text" placeholder="Name" required />
                        <input name="url" type="url" placeholder="https://..." required />
                    </div>
                    <p className="feedback-contact">For a specific request or feedback, feel free to <a href='mailto:social@tareqitos.com'>contact me</a> directly!</p>

                    <button className='button-rounded and-border and-background' type="submit">✉️ Send</button>
                </form>
            </div>
        </>
    )
}
"use client"

import { useState } from "react";
import { sendFeedback } from "../api/api";
import '@/styles/feedback.scss'

interface FeedbackProps {
    title: string;
    categories: string[];
}


export default function Feedback({ title, categories }: FeedbackProps) {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setMessage("")
        setIsLoading(true);
        try {
            const {response} = await sendFeedback(category, name, url);
            if (response.ok) {
                setMessage("Thank you for your contribution! 🚀")
            } 
        } catch (error) {
            setIsLoading(false)
            setMessage("Sorry, the server couldn't be reached ⚠️ ")
            console.log(error)
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
                    <select name="category" onChange={(e) => {setCategory(e.target.value)}}  id="" defaultValue="">
                        {categories.map((category, i) => (
                            <option key={i} value={category}>{category}</option>
                        ))}
                    </select>
                    <div className="feedback-inputs">
                        <input 
                        name="name" 
                        type="text" 
                        placeholder="Name"
                        onChange={(e) => {setName(e.target.value)}} 
                        required />
                        <input name="url" type="url" placeholder="https://..." onChange={(e) => {setUrl(e.target.value)}} required />
                    </div>
                    <p className="feedback-contact">For a specific request or feedback, feel free to <a href='mailto:social@tareqitos.com'>contact me</a> directly!</p>

                    <button className='button-rounded and-border and-background' type="submit">✉️ Send</button>
                </form>
            </div>
        </>
    )
}
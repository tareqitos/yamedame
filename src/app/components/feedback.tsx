import '@/styles/feedback.scss'
import FeedbackClient from './feedback-client';

interface FeedbackProps {
    title: string;
    categories: string[];
}

export default async function Feedback({ title, categories }: FeedbackProps) {

    async function sendFeedback(formData: FormData) {
        "use server"

        const category = formData.get('category')
        const name = formData.get('name')
        const url = formData.get('url')

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${API_URL}/feedback/suggestion`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category, name, url })
        })

        if (!res.ok) {
            throw new Error("Failed to send feedback");
          }

        const data = await res.json();
        console.log(data);
    }

    return (
        <>
            <FeedbackClient title={title} categories={categories} sendFeedback={sendFeedback} />
        </>
    )
}
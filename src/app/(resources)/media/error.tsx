'use client'

import { useEffect } from "react"
import '@/styles/resources.scss'

export default function Error({ error }: {error: Error}) {
    useEffect(() => {
        console.log(error);
    }, [error])

    return <p className="error">An error has occured. Try refresh the page or <a href='mailto:contact@yameda.me'>contact me</a>!<br /><br />ごめんなさい 🙇</p>
}
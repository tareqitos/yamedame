'use client'

import { useEffect } from "react"
import '@/styles/resources.scss'

export default function Error({ error }: {error: Error}) {
    useEffect(() => {
        console.error(error);
    }, [error])

    return <p id="error">An error has occured loading the search bar. Try refresh the page or <a href='mailto:contact@yameda.me'>contact me</a>!<br /><br />ごめんなさい 🙇</p>
}
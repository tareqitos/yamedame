import '@/styles/update.scss'
import '@/styles/resources.scss'
import '@/styles/home.scss'
import Navbar from "@/app/components/navbar"
import Feb2025 from "./02-2025"
import March2025 from "./03-2025"
import Link from 'next/link'
import April2025 from './04-2025'

export default async function Page({ params }: { params: Promise<{ month: string }> }) {
    const month = (await params).month

    return (
        <>
            <Navbar resources={{}} />

            <div className="update-wrapper">
                <div className="navigation-links">
                    <Link href={'/'} className="button-rounded">Home</Link>
                    <Link href={'/resources'} className="button-rounded">Resources</Link>
                    <a href='https://ko-fi.com/H2H0QZVAZ' className="button-rounded" target="_blank">Donate</a>
                </div>
                <div className="update-container">
                    {month == 'february' && <Feb2025 month={month} />}
                    {month == 'march' && <March2025 month={month} />}
                    {month == 'april' && <April2025 month={month} />}
                    <p className="thats-all">以上です&#33;</p>
                </div>
            </div>
        </>
    )
}
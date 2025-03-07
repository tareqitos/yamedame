import '@/styles/update.scss'
import Sidebar from "@/app/components/sidebar"
import Navbar from "@/app/components/navbar"
import Feb2025 from "./02-2025"
import March2025 from "./03-2025"

export default async function Page({ params }: { params: Promise<{ month: string }> }) {
    const month = (await params).month

    return (
        <>
            <Navbar resources={{}} />
            <div className="update-wrapper">
                <div className="update-container">
                    {month == 'february' && <Feb2025 month={month} />}
                    {month == 'march' && <March2025 month={month} />}
                    <p className="thats-all">以上です&#33;</p>
                </div>
                <Sidebar resources={{}} />
            </div>
        </>
    )
}
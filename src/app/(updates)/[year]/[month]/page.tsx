import Link from "next/link"
import '@/styles/update.scss'
import Icons from "@/utils/icons"

export default async function Page({ params }: { params: Promise<{ month: string }> }) {
    const month = (await params).month

    return (
        <>
            <div className="monthly-update">
                <h1>Monthly update - {month.charAt(0).toUpperCase() + month.slice(1).split('-updates')}</h1>
                <h2>Updates</h2>
                <ul>
                    <li>Added 'Monthly update' page</li>
                </ul>
                <h2>Resources updates</h2>
                <ul>
                    <li>Added <a href="https://learnjapanese.moe/">The Moe Way</a> to <Link href='/resources#miscellaneous-id'>Miscellaneous </Link><Icons resource='miscellaneous' /> </li>
                    <li>Added <a href="https://community.wanikani.com/t/master-list-of-book-clubs/35283">Master List of Book Clubs</a> to <Link href='/resources#reading-id'>Reading </Link><Icons resource='reading' /></li>
                </ul>
            </div>
        </>
    )
}
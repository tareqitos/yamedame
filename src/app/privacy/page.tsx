import Link from "next/link"
import '@/styles/update.scss'
import Navbar from "@/app/components/navbar"

export default function Privacy() {

    return (
        <>
            <Navbar resources={{}} />
            <div className="update-wrapper">

                <div className="update-container">
                    <div className="monthly-update">
                        <h1>Privacy Policy</h1>
                        <h2>What data do I collect?</h2>
                        <h4>I collect only what&apos;s is necessary to keep this site running smoothly</h4>
                        <ul>
                            <li><strong style={{ color: '#78b3e2' }}>Login cookie</strong> - A single necessary cookie to keep you signed in. It disappears when you log out.</li>
                            <li><strong style={{ color: '#78b3e2' }}>Anonymous analytics using <a href='https://github.com/umami-software/umami' target="_blank"><u>Umami</u></a></strong> - I use Umami, a self-hosted analytics tool. <i>No cookies, no personal data, no tracking</i>. Just basic stats like page views and browser type.</li>
                        </ul>
                        <hr className="resources-title-separator" />
                        <h2>Using the website</h2>
                        <ul>
                            <li>You can <i>browse the website freely</i> without creating an account</li>
                            <li>Creating an account is <i>optional</i> and only used for saving your favorite links. If you don’t need that feature, you don’t need to sign up.</li>
                        </ul>
                        <hr className="resources-title-separator" />
                        <p>Thank you for visiting!</p>
                        <div className="navigation-links">
                            <Link href={'/'} className="button-rounded">Home</Link>
                            <Link href={'/resources'} className="button-rounded">Study resources</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
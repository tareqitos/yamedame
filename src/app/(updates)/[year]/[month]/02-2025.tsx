import Icons from "@/utils/icons";
import Link from "next/link";

export default function Feb2025({ month }: {month: string}) {
    return (
        <div className="monthly-update">
            <h1>Monthly update - {month.charAt(0).toUpperCase() + month.slice(1).split('-updates')}</h1>
            <h2>Updates</h2>
            <ul>
                <li>Added &quot;Monthly update&quot; page</li>
                <li>Added a sidebar containing the anchor for each categories</li>
                <li>Added a navbar for smaller and mobile screens</li>
            </ul>
            <h2>Resources updates</h2>
            <ul>
                <li>Added <a href="https://learnjapanese.moe/">The Moe Way</a> to <Link href='/resources#miscellaneous-id'>Resources - Miscellaneous&nbsp;&nbsp;</Link><Icons resource='miscellaneous' /> </li>
                <li>Added <a href="https://community.wanikani.com/t/master-list-of-book-clubs/35283">Master List of Book Clubs</a> to <Link href='/resources#reading-id'>Resources - Reading&nbsp;&nbsp;</Link><Icons resource='reading' /></li>
                <li>Added <a href="https://www.youtube.com/@BappaShota">Bappa Shota</a> to <Link href='/media#culture-id'>Media - Culture&nbsp;&nbsp;</Link><Icons resource='youtube' /></li>
            </ul>
        </div>
    )
}
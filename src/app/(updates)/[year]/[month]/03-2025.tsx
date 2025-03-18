import Icons from "@/utils/icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function March2025({ month }: { month: string }) {
    return (
        <div className="monthly-update">
            <h1>Monthly update - {month.charAt(0).toUpperCase() + month.slice(1).split('-updates')}</h1>
            <h2>Updates</h2>
            <ul>
                <li>Added a link to the yame dame Discord / <a href="https://discord.gg/QW5QXf3YqX" target="_blank" className="links"><FontAwesomeIcon icon={faDiscord} fontSize={20} display={'block'} /></a></li>
                <li>When logged in, learners can now add <StarIcon
                    className={`favorite-icon`}
                    display={'inline-block'}
                    width={20}
                    fill="#d9a323"
                    stroke="#d9a323"
                    style={{ verticalAlign: 'sub' }} />  and remove <StarIcon
                        className={`favorite-icon`}
                        display={'inline-block'}
                        width={20}
                        fill=""
                        stroke="#d9a323"
                        style={{ verticalAlign: 'sub' }} /> resources to their personal list
                </li>
                <li>Introduced a personal profile page that displays the user&apos;s curated resource collection</li>
                <li>Added account functionality: </li>
                <ul>
                    <li>Register a new account</li>
                    <li>Login to existing account</li>
                    <li>Password recovery</li>
                </ul>

            </ul>
            <h2>Resources updates</h2>
            <ul>
                <li>Added <a href="https://learnjapanese.moe/">The Moe Way</a> to <Link href='/resources#miscellaneous-id'>Resources - Miscellaneous&nbsp;&nbsp;</Link><Icons resource='miscellaneous' /> </li>
                <li>Added <a href="https://community.wanikani.com/t/master-list-of-book-clubs/35283">Master List of Book Clubs</a> to <Link href='/resources#reading-id'>Resources - Reading&nbsp;&nbsp;</Link><Icons resource='reading' /></li>
                <li>Added <a href="https://www.youtube.com/@BappaShota">Bappa Shota</a> to <Link href='/media#culture-id'>Media - Culture&nbsp;&nbsp;</Link><Icons resource='media' /></li>
                <li>Added <a href="https://open.spotify.com/show/58H68tM3uC2JNZI4hXvdeu">The Bite Size Japanese Podcast</a> to <Link href='/media#podcast-id'>Media - Podcast&nbsp;&nbsp;</Link><Icons resource='media' /></li>
                <li>Added <a href="https://hanabira.org/">Hanabira</a> to <Link href='/applications#tools-id'>Software/Applications - Tools&nbsp;&nbsp;</Link><Icons resource='tools' /></li>
                <li>Added <a href="https://reader.manabi.io/">Manabi Reader</a> to <Link href='/applications#reading-id'>Software/Applications - Reading&nbsp;&nbsp;</Link><Icons resource='reading' /></li>
                <li>Added <a href="https://www.sosekiproject.org/index.html">Soseki Project</a> to <Link href='/resources#reading-id'>Resources - Reading&nbsp;&nbsp;</Link><Icons resource='reading' /></li>
                <li>Added <a href="https://nipponcolors.com/">Nippon Colors</a> to <Link href='/resources#vocabulary-id'>Resources - Vocabulary&nbsp;&nbsp;</Link><Icons resource='vocabulary' /></li>
                <li>Added <a href="https://www.incompetech.com/graphpaper/genkoyoushi/">Genkoyoushi</a> to <Link href='/applications#tools-id'>Software/Applications - Tools&nbsp;&nbsp;</Link><Icons resource='tools' /></li>
                <li>Added <a href="http://www17408ui.sakura.ne.jp/tatsum/project/Yomimono/Yomimono-ippai/index.html">Yomimono Ippai</a> to <Link href='/resources#reading-id'>Resources - Reading&nbsp;&nbsp;</Link><Icons resource='reading' /></li>
                <li>Added <a href="https://play.google.com/store/apps/details?id=com.smouldering_durtles.wk&hl=en-US">Smouldering Durtles</a> to <Link href='/applications#flashcards-id'>Software/Applications - Flashcards&nbsp;&nbsp;</Link><Icons resource='flashcards' /></li>
                <li>Removed Otokake.com - link is dead</li>


            </ul>
        </div>
    )
}
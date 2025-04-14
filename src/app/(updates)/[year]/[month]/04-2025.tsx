import Icons from "@/utils/icons";
import Link from "next/link";

export default function April2025({ month }: { month: string }) {
    return (
        <div className="monthly-update">
            <h1>Monthly update - {month.charAt(0).toUpperCase() + month.slice(1).split('-updates')}</h1>
            <h2>Updates</h2>
            <ul>
                <li>Introduced a new <Link href="/games">game</Link> category page</li>
                <li>Created a dedicated <Link href="/resources#kana-id">kana</Link> section on the Resources page</li>
            </ul>
            <h2>Resources updates</h2>
            <ul>
                <h3>Resources</h3>
                <ul>
                    <li>Added <a href="https://kanadojo.com/">Kanadojo</a> to <Link href='/resources#kana-id'>Resources - Kana&nbsp;&nbsp;</Link><Icons resource='kana' /></li>
                    <li>Added <a href="https://kana.pro/">Kana Pro</a> to <Link href='/resources#kana-id'>Resources - Kana&nbsp;&nbsp;</Link><Icons resource='kana' /></li>
                    <li>Added <a href="https://realkana.com/">Real Kana</a> to <Link href='/resources#kana-id'>Resources - Kana&nbsp;&nbsp;</Link><Icons resource='kana' /></li>
                </ul>
                <h3>Games</h3>
                <ul>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=jp.co.hit_point.tabikaeru">旅かえる</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=jp.co.hit_point.nekoatsume">ねこあつめ</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.hidea.cat">Cats & Soup</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.lunosoft.puuung1">Love is in small things</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.hive.aggretsuko">Aggretsuko: Match 3</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.hyperbeard.odyssey">Tsuki&apos;s Oddysey</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=jp.co.imagineer.sumikkogurashi.farm">Sumikkogurashi farm</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.nintendo.zaca">Animal crossing: Pocket Camp</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.rpgsnack.snowman">Snowman Story</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.nomnomnami.hertearsweremylight">her tears were my light</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.caracolu.aznana">AZNANA</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.rpgsnack.bearsrestaurant">Bear&apos;s Restaurant</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.abocado.abocado">Vanished anniversary</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=jp.co.gagex.orionEN">Hungry hearts diner</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.rpgsnack.fishingparadise">Fishing paradiso</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/dev?id=7710637777904825280">Any Kairosoft game</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.lilithgame.hgame.gp">AFK Arena</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.bushiroad.en.bangdreamgbp">BanG Dream!</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://play.google.com/store/apps/details?id=com.caracolu.alterego">ALTER EGO</a> to <Link href='/games#mobile-id'>Games - Mobile&nbsp;&nbsp;</Link><Icons resource='mobile' /></li>
                    <li>Added <a href="https://unityroom.com/">unityroom</a> to <Link href='/games#web-id'>Games - Web&nbsp;&nbsp;</Link><Icons resource='web' /></li>
                </ul>
            </ul>
        </div>
    )
}

import Link from "next/link";
import '../../styles/about.scss'
import Image from "next/image";

export default function About() {
    return (
        <div className="about-container">
            <div className="navigation-links">
                <Link href={'/'} className="button-rounded">Home</Link>
                <Link href={'/resources'} className="button-rounded">Resources</Link>
                <a href='https://ko-fi.com/H2H0QZVAZ' className="button-rounded" target="_blank">Donate</a>
            </div>

            <div className="about-content">
                <h1>About</h1>
                <p>Hello and welcome to Yame Dame!</p>
                <p>This project was created for several reasons. Initially, I wanted a convenient place to organize and access my resources for studying Japanese.
                    After sharing it with a few friends, the idea of sharing it with the world came to mind.</p>
                <p>My motto has always been to never give up, which is what inspired the name of this project. <span className='j-word'>やめ</span> (yame) comes from the verb &quot;yameru&quot; (<span className='j-word'>やめる</span>), which means &quot;to stop&quot; or &quot;to quit.&quot; <span className='j-word'>だめ</span> (dame) means &quot;no good&quot;, &quot;not allowed&quot;, or &quot;don&apos;t&quot;. Together, <span className='j-word'>やめだめ</span> (yame dame) can be interpreted as &quot;Don&apos;t stop&quot; or &quot;Don&apos;t give up!&quot;</p>
                <p>I strongly believe that knowledge should be shared freely and without limits. Creating this project and making it accessible to everyone is my way of expressing gratitude to those who created the resources I share here. The goal is to gather the most useful materials in one place for students, teachers, self-learners, and anyone who wants to learn more about the Japanese language and culture.</p>
                <p>Take care, and happy learning!</p>
                <Image className='face-doodle' width={100} height={84} src="https://cloud.tareqitos.me/i/057cfd5d-f418-4e2c-a350-370ae4eec222.png?width=100" alt="doodle" />
                <p>Tareqitos</p>
            </div>
        </div>
    )
}
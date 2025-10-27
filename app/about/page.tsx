import Button from "@/components/ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="my-10">
            <Link href="/">
            <Button variant="secondary" className="flex items-center mb-4">
                <ArrowLeftIcon size={20} className="inline mr-2"/>
                Home
            </Button>
            </Link>

            <div className="flex flex-col gap-4 mt-10 pl-4 border-l-1 border-foreground/10">
                <h1 className="text-2xl lg:text-4xl font-black">Hello!</h1>
                <p>Welcome to Yame Dame!</p>
                <p>This project was created for several reasons. Initially, I wanted a convenient place to organize and access my
                    resources for studying Japanese.
                    After sharing it with a few friends, the idea of sharing it with the world came to mind.
                </p>
                <p>
                    My motto has always been to never give up, which is what inspired the name of this project.
                    <span className='font-mochiy font-bold'>やめ</span> (yame) comes from the verb &quot;yameru&quot; (<span className='font-mochiy font-bold'>やめる</span>),
                    which means &quot;to stop&quot; or &quot;to quit.&quot; <span className='font-mochiy font-bold'>だめ</span> (dame) means &quot;no good&quot;,
                    &quot;not allowed&quot;, or &quot;don&apos;t&quot;. Together, <span className='font-mochiy font-bold'>やめだめ</span> (yame dame) can be interpreted
                    as &quot;Don&apos;t stop&quot; or &quot;Don&apos;t give up!&quot;
                </p>
                <p>I strongly believe that knowledge should be shared freely and without limits. Creating this project and making it
                    accessible to everyone is my way of expressing gratitude to those who created the resources I share here.
                    The goal is to gather the most useful materials in one place for students, teachers, self-learners,
                    and anyone who wants to learn more about the Japanese language and culture
                </p>
                <p>Take care, and happy learning!</p>
                <Image className='' width={100} height={84} src="https://cloud.tareqitos.me/i/057cfd5d-f418-4e2c-a350-370ae4eec222.png?width=100" alt="doodle" />
                <p className="font-bold">Tareqitos</p>
            </div>
        </div>
    )
}
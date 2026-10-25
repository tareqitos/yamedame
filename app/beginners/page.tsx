import { ResourceCard } from "@/components/ui/card";
import { SidebarMenu } from "@/components/ui/sidebar";
import { getCardData } from "@/utils/constants";
import { anki, dict, grammar, vocabulary } from "@/utils/constants";
import { Item } from "@/types/types";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beginners Guide - Yame Dame",
    description: "How to start learning Japanese: hiragana, katakana, kanji, vocabulary and grammar, in the order most learners follow.",
};

// Example sentence split by writing system
const sentence = [
    { text: "毎朝", script: "kanji" },
    { text: "コーヒー", script: "katakana" },
    { text: "を", script: "hiragana" },
    { text: "飲", script: "kanji" },
    { text: "みます", script: "hiragana" },
    { text: "。", script: "" },
];

const scriptColor: Record<string, string> = {
    hiragana: "text-foreground",
    katakana: "text-primary",
    kanji: "text-logo",
};

const JP = ({ children }: { children: React.ReactNode }) => (
    <span className="font-mochiy">{children}</span>
);

type StepProps = {
    number: number;
    title: string;
    children: React.ReactNode;
    resources?: Item[];
};

const Step = ({ number, title, children, resources }: StepProps) => (
    <section className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
            <span className="font-mochiy text-4xl opacity-20">{number}</span>
            <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
        </div>
        <div className="flex flex-col gap-4 pl-4 border-l-1 border-foreground/10">
            {children}
            {resources && <ResourceCard array={resources} className="!my-2 !gap-2" />}
        </div>
    </section>
);

export default function BeginnersPage() {
    return (
        <div className="flex flex-row gap-4">
            <SidebarMenu items={getCardData()} />
            <div className="flex flex-col gap-14 mt-10 lg:mt-20 mb-20 px-4">

                <header>
                    <h1 className="text-4xl lg:text-5xl font-black">Beginners Guide</h1>
                    <p className="mt-4">
                        People say Japanese is hard to get into. The language takes time, sure, but the first steps? Those are pretty clear.
                        Here they are, in the order most learners go through them, with the resources I&apos;d grab for each one.
                    </p>
                </header>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-3xl font-bold">Three scripts, one sentence</h2>
                    <p>Japanese doesn&apos;t have one alphabet. It has three, and they show up together:</p>
                    <div className="p-6 rounded-2xl bg-card-background text-center">
                        <p className="font-mochiy text-3xl lg:text-4xl">
                            {sentence.map((part, i) => (
                                <span key={i} className={scriptColor[part.script]}>{part.text}</span>
                            ))}
                        </p>
                        <p className="mt-3 text-sm opacity-70">Maiasa kōhī o nomimasu. &quot;I drink coffee every morning.&quot;</p>
                    </div>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <strong>Hiragana</strong> (<JP>ひらがな</JP>): 46 basic characters, one syllable each.
                            It holds the sentence together: grammar endings, particles like <JP>を</JP>, words without kanji.
                        </li>
                        <li>
                            <strong className="text-primary">Katakana</strong> (<JP>カタカナ</JP>): the same 46 sounds, sharper shapes.
                            You&apos;ll see it on foreign words like <JP>コーヒー</JP> (coffee), on names, and anywhere something wants to stand out.
                        </li>
                        <li>
                            <strong className="text-logo">Kanji</strong> (<JP>漢字</JP>): characters borrowed from Chinese, each carrying a meaning.
                            The official everyday list has 2,136 of them. Yes, that&apos;s a lot. No, you don&apos;t learn them all at once.
                        </li>
                    </ul>
                    <p className="opacity-80">
                        You&apos;ll also see <strong>romaji</strong>, Japanese written in Latin letters. It helps for the first few days, then it gets in the way. Let go of it as soon as you can.
                    </p>
                </section>

                <Step number={1} title="Learn hiragana, then katakana" resources={vocabulary}>
                    <p>
                        Everyone starts here. Hiragana usually takes a few days to two weeks.
                        Katakana tends to take longer, simply because you run into it less.
                    </p>
                    <p>
                        Focus on reading first. Writing a few characters by hand helps them stick, but recognising them quickly is what you&apos;ll use every day.
                        And you don&apos;t need to know katakana perfectly before moving on: it gets easier every time you run into it.
                    </p>
                </Step>

                <Step number={2} title="Start a daily vocabulary deck" resources={anki}>
                    <p>
                        Most learners use <a href="https://apps.ankiweb.net/" target="_blank" className="text-primary hover:text-link-hover">Anki</a>, a flashcard app
                        that shows you each word right before you&apos;re likely to forget it.
                        You might not find the UI glamorous at first, but you'll get used to it! 15 to 20 minutes a day beats a two-hour session every Sunday.
                    </p>
                    <p className="opacity-80">
                        About kanji: you don&apos;t need a separate kanji course to begin, since learning words teaches you the kanji inside them.
                        Some people prefer to study kanji on their own first. Both approaches work, so go with whichever one keeps you going.
                    </p>
                </Step>

                <Step number={3} title="Get the basics of grammar" resources={grammar}>
                    <p>
                        Japanese puts the verb at the end of the sentence, and small words called particles
                        (<JP>は</JP>, <JP>が</JP>, <JP>を</JP>, <JP>に</JP>…) mark what each part of the sentence does.
                        Once that clicks, a lot of things start making sense.
                    </p>
                    <p>
                        A good approach is to read a grammar guide from start to finish without trying to memorise everything.
                        It will come back when you see the same patterns in real sentences. Tae Kim is short and to the point,
                        while Imabi goes much deeper and is better kept for later.
                    </p>
                </Step>

                <Step number={4} title="Read and listen, sooner than you think" resources={dict}>
                    <p>
                        Real Japanese is coming for you, and earlier than you&apos;d expect! At first it&apos;ll sound like noise.
                        That&apos;s normal. It doesn&apos;t stay that way once you get use to it.
                    </p>
                    <p>
                        Start with simple things: <Link href="/reading" className="text-primary hover:text-link-hover">graded readers</Link>,
                        {" "}<Link href="/media" className="text-primary hover:text-link-hover">videos made for learners</Link>,
                        {" "}<Link href="/podcast" className="text-primary hover:text-link-hover">slow podcasts</Link>.
                        Keep a dictionary close. Yomitan is especially useful, since it lets you hover over any word in your browser to see what it means.
                    </p>
                </Step>

                <section className="flex flex-col gap-4 pl-4 border-l-1 border-foreground/10">
                    <h2 className="text-2xl font-bold">On pace</h2>
                    <p>
                        I don&apos;t know of any shortcut to learn a language. Everyone who got good at Japanese did the same
                        thing: they kept showing up, most days, for a long time.
                        Some weeks it&apos;ll feel like nothing is moving. It is. You just can&apos;t see it yet.
                    </p>
                    <p>
                        <span className="font-mochiy font-bold">やめだめ</span>. Don&apos;t give up.
                    </p>
                    <p className="font-bold">Tareqitos</p>
                </section>

            </div>
        </div>
    );
}

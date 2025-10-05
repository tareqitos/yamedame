import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import Button from "@/components/ui/button";
import { CardMain } from "@/components/ui/card";
import Link from "next/link";

const cards = [
  { title: 'Resources', desc: 'Access essential materials for your study sessions.', path: 'resources', icon: "📖", shortcuts: ["Dictionary", "Reading"] },
  { title: 'Media', desc: 'Teaching videos, vlogs, podcasts, gaming and more!', path: 'media', icon: "💾", shortcuts: ["Culture", "Podcast"] },
  { title: 'Games', desc: 'Find and play games to enhance to practice the language!', path: 'games', icon: "🎮", shortcuts: ["Web", "Mobile"] },
  { title: 'Software / Applications', desc: 'Useful software and applications to support your studies.', path: 'applications', icon: "💻", shortcuts: ["Flashcards", "Tools"] },
  { title: 'And more to come', desc: 'Stay tuned for more resources and updates!', path: "", icon: "✨", shortcuts: [] }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center px-[max(1rem,calc(50vw-600px))] border-0">
      <div className="my-10 lg:mt-20">
        <Title fontSize="text-6xl lg:text-8xl" logoSize="w-15 h-15 lg:w-25 lg:h-25" />
        <p className="mt-2 px-4 py-1 text-sm bg-card-background rounded-2xl float-end">No excuses not to learn Japanese</p>
      </div>
      <div className=" gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link key={index} href={card.path}>
            <CardMain
              icon={card.icon}
              path={card.path}
              title={card.title}
              description={card.desc}
              shortcuts={card.shortcuts}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 m-5">
        <Button variant="secondary" className="transition-border cursor-pointer"><Link href="/about">About</Link></Button>
        <Button variant="secondary" className="transition-border cursor-pointer"><Link href="https://ko-fi.com/H2H0QZVAZ">Donate</Link></Button>
        <Button variant="secondary" className="transition-border cursor-pointer"><Link href="/updates">Updates 🌸</Link></Button>
      </div>
    </div>
  );
}

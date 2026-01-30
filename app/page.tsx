import { Title } from "@/components/ui/title";
import Button from "@/components/ui/button";
import { MainCard } from "@/components/ui/card";
import { getCardData } from "@/utils/constants";
import Link from "next/link";
import { RandomLink } from "@/components/random";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import { getResources } from "./api/api";

export default async function Home() {
  const cards = getCardData();
  const resources = await getResources();

  return (
    <div className="flex flex-col items-center border-0">
      <div className="my-10 lg:mt-20">
        <Title fontSize="text-6xl lg:text-8xl" logoSize="w-15 h-15 lg:w-25 lg:h-25" />
        <p className="mt-2 px-4 py-1 text-sm bg-card-background rounded-2xl float-end">No excuses not to learn Japanese</p>
      </div>
      <div className="flex gap-2 mb-5">
        <Button variant="secondary" className="">
          <StarIcon size={20} color="#fcbc32" weight="fill" className="mr-2 inline align-sub" />
          <Link href="/beginners" title="Beginner Esse">Beginner Essentials</Link>
        </Button>
        <RandomLink resources={resources} />
      </div>
      <div className="xl:px-20 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link key={index} href={`/${card.path}`} title={card.title}>
            <MainCard
              icon={card.icon}
              path={card.path}
              title={card.title}
              desc={card.desc}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 my-10">
        <Button variant="secondary"><Link href="/updates" title="Monthly updates">Jan 2026 Updates 🌸</Link></Button>
        <Button variant="secondary"><Link href="/about" title="About">About</Link></Button>
        <Button variant="secondary"><Link href="https://ko-fi.com/H2H0QZVAZ" title="Buy me a coffee!">Donate</Link></Button>
      </div>
    </div>
  );
}

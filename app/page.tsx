import { Title } from "@/components/ui/title";
import Button from "@/components/ui/button";
import { MainCard } from "@/components/ui/card";
import { getCardData } from "@/utils/constants";
import Link from "next/link";
import { RandomLink } from "@/components/random";
import { PlantIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { getResources } from "./api/api";
import { formatUpdateMonth, latestUpdate } from "./updates/entries";

export default async function Home() {
  const cards = getCardData();
  const resources = await getResources();

  return (
    <div className="flex flex-col items-center border-0">
      <div className="my-10 lg:mt-20 animate-rise">
        <Title fontSize="text-6xl lg:text-8xl" logoSize="w-15 h-15 lg:w-25 lg:h-25" />
        <p className="mt-2 px-4 py-1 text-sm bg-card-background rounded-2xl float-end">No excuses not to learn Japanese</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-5 animate-rise" style={{ "--i": 1 } as React.CSSProperties}>
        <Button variant="tertiary" className="">
          <PlantIcon size={20} color="#5cbf6a" weight="fill" className="mr-2 inline align-sub" />
          <Link href="/beginners" title="Beginners Guide">Beginners Guide</Link>
        </Button>
        <RandomLink resources={resources} />
        <Link href="/favorites" title="Favorites">
          <Button variant="secondary" tabIndex={-1}>
            <StarIcon size={20} weight="fill" className="mr-2 inline align-sub text-favorite" />
            Favorites
          </Button>
        </Link>
      </div>
      <div className="xl:px-20 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link key={index} href={`/${card.path}`} title={card.title} className="animate-rise" style={{ "--i": index + 2 } as React.CSSProperties}>
            <MainCard
              icon={card.icon}
              path={card.path}
              title={card.title}
              desc={card.desc}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 my-10 animate-rise" style={{ "--i": cards.length + 2 } as React.CSSProperties}>
        <Button variant="secondary"><Link href="/updates" title="Monthly updates">{formatUpdateMonth(latestUpdate.date, "short")} Updates {latestUpdate.emoji}</Link></Button>
        <Button variant="secondary"><Link href="/about" title="About">About</Link></Button>
        <Button variant="secondary"><Link href="https://ko-fi.com/H2H0QZVAZ" title="Buy me a coffee!" data-umami-event="Donate">Donate</Link></Button>
      </div>
    </div>
  );
}

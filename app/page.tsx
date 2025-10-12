import { Title } from "@/components/ui/title";
import Button from "@/components/ui/button";
import { MainCard } from "@/components/ui/card";
import { getCardData } from "@/utils/constants";
import Link from "next/link";

export default async function Home() {
  const cards = getCardData();

  return (
    <div className="flex flex-col items-center border-0">
      <div className="my-10 lg:mt-20">
        <Title fontSize="text-6xl lg:text-8xl" logoSize="w-15 h-15 lg:w-25 lg:h-25" />
        <p className="mt-2 px-4 py-1 text-sm bg-card-background rounded-2xl float-end">No excuses not to learn Japanese</p>
      </div>
      <div className=" gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link key={index} href={`/${card.path}`}>
            <MainCard
              icon={card.icon}
              path={card.path}
              title={card.title}
              desc={card.desc}
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 m-5">
        <Button variant="secondary"><Link href="/about">About</Link></Button>
        <Button variant="secondary"><Link href="https://ko-fi.com/H2H0QZVAZ">Donate</Link></Button>
        <Button variant="secondary"><Link href="/updates">Updates 🌸</Link></Button>
      </div>
    </div>
  );
}

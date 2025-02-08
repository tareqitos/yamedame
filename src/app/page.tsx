import "@/styles/home.scss";
import Link from "next/link";
import { Cards } from "@/app/components/cards";
import Update from "./components/update";

export default function Home() {
  return (
    <>
      <Update message={'This project is under active development. Bugs and changes are expected 🙇'} />
      <main className="homepage-wrapper">
        <div className="homepage-logo">
          <div className="title">
            <Link href="/"><span className="logo"></span>やめだめ</Link>
            <p>No excuses not to learn Japanese</p>
          </div>
          <div className="cards-container">
            <Cards />
          </div>
          <div className="navigation-links">
            <Link href={'/about'} className="about-link button-rounded">About</Link>
            <a href='https://ko-fi.com/H2H0QZVAZ' className="about-link button-rounded" target="_blank">Donate</a>
          </div>
        </div>
      </main>
    </>
  );
}

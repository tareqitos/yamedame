import type { Metadata } from "next";
import { Geist, Geist_Mono, Mochiy_Pop_P_One, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/themeContext";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mochiyPopPOne = Mochiy_Pop_P_One({
  variable: "--font-mochiy",
  subsets: ["latin"],
  weight: "400"
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yameda.me"),
  title: "Yame Dame - Japanese Learning Resources",
  description: "A comprehensive list of Japanese learning resources for beginners and advanced learners. Discover online courses, books, textbooks, and podcasts to enhance your Japanese language skills. Start learning Japanese today!",
  keywords: ["Japanese", "learning", "language", "resources", "beginner", "advanced", "courses", "books", "podcasts"],
  authors: [{ name: "Tareqitos", url: "https://tareqitos.com" }],
  creator: "Tareqitos",
  publisher: "Tareqitos",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yameda.me",
  },
  openGraph: {
    title: "Yame Dame - Japanese Learning Resources",
    description: "A comprehensive list of Japanese learning resources for beginners and advanced learners.",
    url: "https://yameda.me",
    siteName: "Yame Dame",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yame Dame Open Graph Image",
      },
    ],
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    title: "Yame Dame - Japanese Learning Resources",
    description: "A comprehensive list of Japanese learning resources for beginners and advanced learners.",
    creator: "@tareqitos",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mochiyPopPOne.variable} ${nunito.variable} antialiased`}
      >
        <ThemeProvider>
          <NextTopLoader showForHashAnchor={false} showSpinner={false} />
          <Header />
          <main className="flex-1 px-[max(1rem,calc(50vw-800px))] lg:px-[max(2rem,calc(50vw-800px))]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Head() {
  return (
    <head>
      {/* <script defer src="https://analytics.tareqitos.me/script.js" data-website-id="420f37a5-a3c0-424a-803f-3b937bf0c67f"></script> */}
      <meta property="og:image" content="/og-image.png"></meta>
      <meta property="og:site_name" content="Yame Dame"></meta>
      <meta property="og:title" content="Yame Dame"></meta>
      <meta property="og:description" content="All the resources you need to improve your Japanese language learning!" />
      <meta property="og:url" content="https://yameda.me/"></meta>
    </head>
  )
}
import type { Metadata } from "next";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { ThemeProvider } from "@/context/themeContext";
import "@/styles/layout.scss"
import "@/styles/components.scss"
import ToTopButton from "@/utils/toTopButton";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Welcome - Yame Dame",
  description: "A comprehensive list of Japanese learning resources for beginners and advanced learners. Discover online courses, language exchange partners, books, textbooks, and podcasts to enhance your Japanese language skills. Start learning Japanese today!",
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>
        <ThemeProvider>
          <Header />
          <NextTopLoader />
          <div id="content">
            {children}
          </div>
          <ToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Head() {
  return (
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <script defer src="https://analytics.tareqitos.me/script.js" data-website-id="420f37a5-a3c0-424a-803f-3b937bf0c67f"></script>
    </head>
  )
}
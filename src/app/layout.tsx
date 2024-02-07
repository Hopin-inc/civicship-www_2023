import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { PropsWithChildren } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ['latin'] });
const siteName = "civicship";
const description = "あなたの活動が団体への応援を大きくする。シビックシップは、ありたい社会に向かう市民活動を応援しています。";
const url = "https://portal.civicship.jp/";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${ siteName }`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@0xcivicship',
    // creator: '@作者のTwitterID',
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/favicons/site.webmanifest"/>
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000"/>
      <link rel="shortcut icon" href="/favicons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
    </head>
    <body className={ `${ inter.className } min-h-screen overflow-x-hidden flex flex-col` }>
    <Header/>
    <main className="flex flex-col items-center justify-between pt-[76px] grow">
      { children }
    </main>
    <Footer/>
    </body>
    </html>
  )
};

export default RootLayout;

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Job Worth Calculator",
    template: "%s | Job Worth Calculator"
  },
  alternates: {
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
  description: "这b班上得值不值 - 计算你的工作性价比 | Job Worth Calculator - Calculate your job's value",
  verification: {
    google: "_OQGiIpYz87USAsgJV2C07-JJhQ8myV_4GoM1kDjFic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_OQGiIpYz87USAsgJV2C07-JJhQ8myV_4GoM1kDjFic" />
        <meta name="baidu-site-verification" content="codeva-pEoMg5F0Cv" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7207313144293144" crossOrigin="anonymous"></script>
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <div className="pb-8"></div>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}

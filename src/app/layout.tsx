import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Step-Up | Rise Together, Grow Together",
  description:
    "작은 전진이 만드는 큰 변화, 당신의 성장을 함께합니다. QLI(Quantum Leap Institute)의 인문학 기반 교육 프로그램 Step-Up.",
  keywords: [
    "Step-Up",
    "QLI",
    "인문학",
    "청년 교육",
    "자기 성장",
    "고전 인문학",
    "Quantum Leap Institute",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${sora.variable} h-full antialiased`}
    >
      <head>
        {/* Pretendard CDN */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

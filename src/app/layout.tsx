import type { Metadata } from "next";
import { Noto_Serif_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Step-Up | Rise Together, Grow Together",
  description:
    "AI와 인문학이 만나, 당신의 성장을 함께합니다. QLI(Quantum Leap Institute)의 인문학 기반 AI 교육 프로그램 Step-Up.",
  keywords: [
    "Step-Up",
    "QLI",
    "인문학",
    "AI 교육",
    "자기 성장",
    "청년 교육",
    "고전 인문학",
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
      className={`${notoSerifKr.variable} ${playfairDisplay.variable} h-full antialiased`}
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

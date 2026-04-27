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

const SITE_URL = "https://site-test-red.vercel.app";
const SITE_NAME = "Step-Up";
const SITE_DESCRIPTION =
  "작은 전진이 만드는 큰 변화, 당신의 성장을 함께합니다. QLI(Quantum Leap Institute)의 인문학 기반 교육 프로그램 Step-Up.";
const OG_IMAGE = "/images/hero-bg.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Rise Together, Grow Together`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Step-Up",
    "QLI",
    "인문학",
    "청년 교육",
    "자기 성장",
    "고전 인문학",
    "Quantum Leap Institute",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Rise Together, Grow Together`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Rise Together, Grow Together`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "WTlOqdsXH9cwBUFb2X0lyjA0KhS_G9B6D2WNe8FdJ80",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "Quantum Leap Institute",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "ko",
  image: `${SITE_URL}${OG_IMAGE}`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

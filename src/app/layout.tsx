import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Cardinal Principals — Advisory for PE-backed industrials",
  description:
    "Operators who have done it, advising the leaders who must. Boutique advisory firm partnering with PE sponsors and portfolio-company CEOs on turnarounds, growth strategy, and organizational redesign.",
  openGraph: {
    title: "Cardinal Principals — Advisory for PE-backed industrials",
    description:
      "Operators who have done it, advising the leaders who must. Boutique advisory firm partnering with PE sponsors and portfolio-company CEOs on turnarounds, growth strategy, and organizational redesign.",
    type: "website",
    images: [
      {
        url: "/cardinal.png",
        width: 203,
        height: 203,
        alt: "Cardinal Principals",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Cardinal Principals — Advisory for PE-backed industrials",
    description:
      "Operators who have done it, advising the leaders who must.",
    images: ["/cardinal.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

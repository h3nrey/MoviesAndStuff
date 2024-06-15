import type { Metadata } from "next";
import { Inter, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rennie = Reenie_Beanie({
  subsets: ['latin'],
  display: "swap",
  weight: ['400'],
  variable: "--font-rennie"
})

export const metadata: Metadata = {
  title: "Filmes",
  description: "Filmes que eu assisti além de heróis e animes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rennie.variable}`}>{children}</body>
    </html>
  );
}

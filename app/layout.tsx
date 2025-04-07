import type { Metadata } from "next"
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fermy - Innovative Fermented Drink from Amami Oshima",
  description:
    "Where traditional wisdom meets modern technology, a new fermentation culture is born. Fermy is an innovative fermented drink combining the traditional beverage 'Miki' from Amami Oshima with goat milk.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}


import './globals.css'
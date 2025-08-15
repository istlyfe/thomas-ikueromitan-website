import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Thomas Ikueromitan and sons Nigeria Limited - Procurement & Trading",
  description:
    "Reliable sourcing in building materials, automobiles, agriculture, and transport & haulage across Nigeria and West Africa.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

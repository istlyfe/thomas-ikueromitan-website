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
  icons: {
    icon: [
      { url: '/TIS_logo.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/cac_logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/TIS_logo.png',
    apple: '/TIS_logo.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/TIS_logo.png" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/TIS_logo.png" />
        <link rel="shortcut icon" href="/TIS_logo.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

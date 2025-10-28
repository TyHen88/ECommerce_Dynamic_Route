import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Easy-Cart - Your Online Store",
  description: "Modern e-commerce platform with admin management. Shop the latest products with secure checkout.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["ecommerce", "shop", "online store", "products", "shopping"],
  authors: [{ name: "Easy-Cart" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Easy-Cart",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Easy-Cart",
    title: "Easy-Cart - Your Online Store",
    description: "Modern e-commerce platform with admin management",
  },
  twitter: {
    card: "summary",
    title: "Easy-Cart - Your Online Store",
    description: "Modern e-commerce platform with admin management",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.jpg" />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-Shop - Your Online Store",
  description: "Modern e-commerce platform with admin management. Shop the latest products with secure checkout.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["ecommerce", "shop", "online store", "products", "shopping"],
  authors: [{ name: "E-Shop" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "E-Shop",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "E-Shop",
    title: "E-Shop - Your Online Store",
    description: "Modern e-commerce platform with admin management",
  },
  twitter: {
    card: "summary",
    title: "E-Shop - Your Online Store",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.jpg" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

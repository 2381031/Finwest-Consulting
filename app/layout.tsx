import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finwest Consulting - Konsultan Keuangan & Bisnis",
  description:
    "Solusi keuangan dan bisnis untuk UMKM dan perusahaan menengah. Shaping Tomorrow's Business Through Financial Clarity.",
  keywords: "konsultan keuangan, konsultan bisnis, UMKM, startup, perencanaan keuangan, strategi bisnis",
  authors: [{ name: "Finwest Consulting" }],
  openGraph: {
    title: "Finwest Consulting - Konsultan Keuangan & Bisnis",
    description: "Solusi keuangan dan bisnis untuk UMKM dan perusahaan menengah",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

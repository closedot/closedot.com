import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CloseDot - AI-Powered Hiring & Onboarding",
  description: "Streamline your hiring process with AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'
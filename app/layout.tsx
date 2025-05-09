import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Icon, icons } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EZPass",
  description: "Experience the future, powered by retro vibes",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
  url: "https://synthwave-app.vercel.app",
  type: "website",
  keywords: ["synthwave", "retro", "cybersecurity", "Password Manager", "future", "vibes"],
  siteName: "EZPass",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
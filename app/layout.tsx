import type { Metadata } from "next"
import "modern-normalize/modern-normalize.css";
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Iurii Kyrychenko Fullstack developer",
  description: "Iurii Kyrychenko a fullstack developer from Bila Tserkva Ukraine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container vertical-fix">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

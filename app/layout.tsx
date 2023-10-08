
import AuthContext from '@/context/AuthContext'

import Footer from '@/components/footer/footer'
import './globals.css'
import type { Metadata } from 'next'
import ScrollToTop from '@/components/scrollToTop/scrollToTop'

export const metadata: Metadata = {
  title: 'Banuddy',
  description: 'Generated by pair3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="font-display">
      <body>
        <AuthContext>{children}</AuthContext>
        <div>HEADER</div>
        <ScrollToTop />
      </body>
    </html>
  )
}

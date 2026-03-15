import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ABS Talha - Full-Stack Developer & Startup Builder',
  description: 'Premium portfolio of Talha, a full-stack developer and startup founder specializing in modern web applications, SaaS products, and scalable digital platforms.',
  keywords: 'full-stack developer, startup founder, Next.js, React, product builder, Bangladesh',
  authors: [{ name: 'ABS Talha' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'ABS Talha - Full-Stack Developer & Startup Builder',
    description: 'Building products that look sharp, scale well, and solve real problems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  )
}

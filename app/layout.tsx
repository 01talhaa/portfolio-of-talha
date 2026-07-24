import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ABS Talha - Full-Stack Developer & Startup Builder',
  description: 'Premium portfolio of Talha, a full-stack developer and startup founder specializing in modern web applications, SaaS products, and scalable digital platforms.',
  keywords: 'full-stack developer, startup founder, Next.js, React, product builder, Bangladesh',
  authors: [{ name: 'ABS Talha' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'ABS Talha - Full-Stack Developer & Startup Builder',
    description: 'Building products that look sharp, scale well, and solve real problems.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white font-sans antialiased selection:bg-black/10 selection:text-black dark:selection:bg-white/20 dark:selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

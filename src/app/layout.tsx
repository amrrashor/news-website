import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


import { Providers } from './providers';
import { Footer, Navbar } from '@/components';

import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News Website',
  description: 'News step by step',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

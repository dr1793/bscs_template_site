import './globals.css'
import { Inter } from 'next/font/google'
import { HOME_PAGE_META_DESCRIPTION, HOME_PAGE_META_NAME } from '../lib/secrets';

export const metadata = {
  title: HOME_PAGE_META_NAME,
  description: HOME_PAGE_META_DESCRIPTION,
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}


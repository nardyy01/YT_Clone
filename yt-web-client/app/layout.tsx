import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './utils/navbar/navbar'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin']})


export const metadata: Metadata = {
  title: 'YouNoob',
  description: 'YouTube Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body} >
        <div className={styles.mainContent}>
          <Navbar />
          <div>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}

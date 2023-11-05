import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'Next Admin Dash',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100 min-h-screen'>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  )
}

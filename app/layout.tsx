import './globals.css'
import { GeistSans } from 'geist/font/sans'

export const metadata = { title: 'OSAM AUTOS LTD', description: 'Premium Automotive Hub' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}

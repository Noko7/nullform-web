import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nullform.design - Creative Design',
  description: 'We are a guerilla force in the world of identity and design. We work at the intersection of design and technology to deliver unique digital experiences like no other',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

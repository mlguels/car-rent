import RegisterModal from './components/modals/RegisterModal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
 
const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Morent Car Rental',
  description: 'Rental Cars Inc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  )
}

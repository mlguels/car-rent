import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

import NavBar from './components/navbar/NavBar'
 
const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Morent Car Rental',
  description: 'Rental Cars Inc',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <NavBar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}

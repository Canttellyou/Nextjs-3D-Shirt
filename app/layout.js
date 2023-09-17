import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3D Shirt',
  description: 'Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your style ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="threejs.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

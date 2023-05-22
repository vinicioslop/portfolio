import './globals.css'

import { Merriweather_Sans } from 'next/font/google'

const merriweather_Sans = Merriweather_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Vinicius Portfolio',
  description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={merriweather_Sans.className}>{children}</body>
    </html>
  )
}

import './globals.css';

import Head from 'next/head';

import NavBar from '@/app/Components/NavBar/NavBar';
import Footer from '@/app/Components/Footer/Footer';

export default function RootLayout({ children, metadata }) {
  return (
    <div className='back'>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
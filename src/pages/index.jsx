import Head from 'next/head';

import RootLayout from '@/app/layout';

import HomeContent from '@/app/Components/HomeContent/HomeContent';

export default function HomePage() {
  const metadata = {
    title: 'Vinicius Portfolio',
    description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
  }

  return (
    <>
      <Head>
        <title>{metadata.title} / Home</title>
      </Head>
      <RootLayout>
        <HomeContent />
      </RootLayout>
    </>
  )
}

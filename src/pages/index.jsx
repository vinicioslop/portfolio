import RootLayout from '@/app/layout';

import HomeContent from '@/app/Components/PageContent/HomeContent/HomeContent';

export default function HomePage() {
  const metadata = {
    title: 'Portfolio / Home',
    description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
  }

  return (
    <>
      <RootLayout metadata={metadata}>
        <HomeContent />
      </RootLayout>
    </>
  )
}

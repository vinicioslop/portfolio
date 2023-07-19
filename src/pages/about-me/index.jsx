import RootLayout from '@/app/layout';

import AboutMeContent from '@/app/Components/AboutMeContent/AboutMeContent';

export default function AboutMePage() {
    const metadata = {
        title: 'Vinicius Portfolio / Sobre Mim',
        description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
    }

    return (
        <>
            <RootLayout metadata={metadata}>
                <AboutMeContent />
            </RootLayout>
        </>
    )
}
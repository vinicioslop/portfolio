import Head from 'next/head';

import RootLayout from '@/app/layout';

import ProjectsContent from '@/app/Components/ProjectContent/ProjectContent';

export default function ProjectsPage() {
    const metadata = {
        title: 'Vinicius Portfolio',
        description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
    }

    return (
        <>
            <Head>
                <title>{metadata.title} / Projetos</title>
            </Head>
            <RootLayout>
                <ProjectsContent />
            </RootLayout>
        </>
    )
}
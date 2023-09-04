import RootLayout from '@/app/layout';

import ProjectContent from '@/app/Components/PageContent/ProjectContent/ProjectContent';

export default function ProjectsPage() {
    const metadata = {
        title: 'Portfolio / Projetos',
        description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
    }

    return (
        <>
            <RootLayout metadata={metadata}>
                <ProjectContent />
            </RootLayout>
        </>
    )
}
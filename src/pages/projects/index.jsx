import RootLayout from '@/app/layout';

import ProjectsContent from '@/app/Components/ProjectContent/ProjectContent';

export default function ProjectsPage() {
    const metadata = {
        title: 'Vinicius Portfolio / Projetos',
        description: 'Portfólio de aplicações desenvolvidas por mim, Vinícius Lopes',
    }

    return (
        <>
            <RootLayout metadata={metadata}>
                <ProjectsContent />
            </RootLayout>
        </>
    )
}
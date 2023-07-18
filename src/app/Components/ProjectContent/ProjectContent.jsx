import styles from './styles.module.css';

import ProjectCard from '@/app/Components/ProjectCard/ProjectCard';

import buygeHomeImage from '@/images/projetos/tcc_front/buyge_home.png';
import socialTreeImage from '@/images/projetos/social_tree/social_tree_image.png';

export default function ProjectsContent() {
    const projects = [
        {
            projectId: 'buygeFront',
            imageCover: buygeHomeImage,
            imageAlt: 'Exemplo de tela inicial do projeto Buyge',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            title: 'Buyge Frontend',
            information: 'Marketplace de venda de produtos do segmento Geek.',
            github: 'https://github.com/vinicioslop/buyge-frontend',
            live: ''
        },
        {
            projectId: 'socialTree',
            imageCover: socialTreeImage,
            imageAlt: 'Exemplo de tela inicial do projeto Social Tree',
            technologies: ['Next.js', 'ReactJs', 'HTML', 'CSS', 'JavaScript'],
            title: 'Social Tree',
            information: 'Projeto inspitado no Linktree, aplicação onde é possível divulgar links de acesso a redes sociais e contato pessoal.',
            github: 'https://github.com/vinicioslop/social-tree',
            live: 'https://social.vinicioslop.com.br'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title_desc}>
                <h2 className={styles.title}>Projetos</h2>
                <p className={styles.description}>
                    Lista dos meus projetos
                </p>
            </div>
            <div className={styles.project_section}>
                <h3>Projetos Completos</h3>
                <div className={styles.project_group}>
                    {projects.map((project) => <ProjectCard data={project} key={project.projectId} />)}
                </div>
            </div>
        </div>
    )
}
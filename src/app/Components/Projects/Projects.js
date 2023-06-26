import projectsStyle from './projects.module.css';

import ProjectCard from '../ProjectCard/ProjectCard';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

import buygeHomeImage from '../../../images/projetos/tcc_front/buyge_home.png';
import socialTreeImage from '../../../images/projetos/social_tree/social_tree_image.png';

export default function Projects() {
    const projects = [
        {
            imageCover: buygeHomeImage,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            title: 'Buyge Frontend',
            information: 'Marketplace de venda de produtos do segmento Geek.',
            github: '/',
            live: '/'
        },
        {
            imageCover: socialTreeImage,
            technologies: ['Next.js', 'ReactJs', 'HTML', 'CSS', 'JavaScript'],
            title: 'Social Tree',
            information: 'Projeto inspitado no Linktree, aplicação onde é possível divulgar links de acesso a redes sociais e contato pessoal.',
            github: '/',
            live: 'https://social.vinicioslop.com.br/'
        }
    ];

    return (
        <div className={projectsStyle.projects_container}>
            <div className={projectsStyle.title_container}>
                <h2 className={projectsStyle.title}>
                    <span>#</span>projetos
                </h2>
                <div className={projectsStyle.line_container}>
                    <hr />
                </div>
                <Link className={projectsStyle.link} href='/'>
                    <span className={projectsStyle.content}>Veja todos</span>
                    <Image src={arrowRightIcon} height={20} width={20} />
                </Link>
            </div>
            
            <div className={projectsStyle.project_group}>
                {projects.map((project) => <ProjectCard data={project} />)}
            </div>
        </div>
    )
}
import projectsStyle from './projects.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

export default function Projects() {
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
                <div className={projectsStyle.project_item}>
                    <div className={projectsStyle.project_image}>
                        IMAGEM
                    </div>
                    <hr/>
                    <div className={projectsStyle.project_technologies}>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <hr/>
                    <div className={projectsStyle.project_description}>
                        Descrição
                    </div>
                </div>
            </div>
        </div>
    )
}
import projectsStyle from './projects.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

import buygeHomeImage from '../../../images/projetos/tcc_front/buyge_home.png';
import socialTreeImage from '../../../images/projetos/social_tree/social_tree_image.png';

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
                    <div className={projectsStyle.project_image_container}>
                        <Image className={projectsStyle.project_image} src={buygeHomeImage} />
                    </div>
                    <hr />
                    <div className={projectsStyle.project_technologies}>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <hr />
                    <div className={projectsStyle.project_description}>
                        <h3 className={projectsStyle.project_title}>Buyge Frontend</h3>
                        <p className={projectsStyle.project_information}>Marketplace de venda de produtos do segmento Geek.</p>
                        <div className={projectsStyle.button_group}>
                            <button>GitHub</button>
                            <button>Online</button>
                        </div>
                    </div>
                </div>

                <div className={projectsStyle.project_item}>
                    <div className={projectsStyle.project_image_container}>
                        <Image className={projectsStyle.project_image} src={socialTreeImage} />
                    </div>
                    <hr />
                    <div className={projectsStyle.project_technologies}>
                        <span>Next.js</span>
                        <span>ReactJs</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <hr />
                    <div className={projectsStyle.project_description}>
                        <h3 className={projectsStyle.project_title}>Social Tree</h3>
                        <p className={projectsStyle.project_information}>Projeto inspitado no Linktree, aplicação onde é possível divulgar links de acesso a redes sociais e contato pessoal.</p>
                        <div className={projectsStyle.button_group}>
                            <button>GitHub</button>
                            <button>Online</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
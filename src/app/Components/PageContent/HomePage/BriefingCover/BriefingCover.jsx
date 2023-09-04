import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

export default function BriefingCover() {
    const workingProject = {
        id: 2,
        name: "Portfólio",
        description: "Projeto de Portfolio para disponibilizar outros projetos desenvolvidos po mim.",
        technologies: ["Next.js", "React", "HTML", "CSS", "JavaScript"],
        imageUrl: "https://i.pinimg.com/564x/4e/24/e8/4e24e8534d875d5c92ca2fb589c23f44.jpg",
        imageAlt: "Exemplo de tela inicial do projeto Portfolio",
        githubUrl: "https://github.com/vinicioslop/portfolio",
        liveUrl: "https://portfolio.vinicioslop.com.br",
        projectType: "complete-project",
        working: true
    };

    return (
        <div className={styles.briefing_container}>
            <div className={styles.briefing}>
                <h2 className={styles.title}>
                    Aspirante a <span className={styles.important}>Desenvolvedor</span>, tanto <span className={styles.important}>Web</span> como <span className={styles.important}>Fullstack</span>
                </h2>
                <p className={styles.description}>Desenvolvo pequenos projetos pessoais como prática e realizo pequenos serviços para possíveis clientes e amigos.</p>
                <Link
                    className={styles.contact_button_link}
                    target="_blank"
                    href="https://social.vinicioslop.com.br"
                >
                    <button className={styles.contact_button}>Me contate !!</button>
                </Link>
            </div>

            <div className={styles.working_on}>
                <div className={styles.working_image_background}>
                    <Image
                        width={600}
                        height={600}
                        className={styles.working_image}
                        src={workingProject.imageUrl}
                        alt={workingProject.imageAlt}
                        priority
                    />
                </div>
                <p className={styles.working_description}>
                    <span className={styles.working_color}></span>
                    Atualmente trabalhando no <span className={styles.working_enfasis}>{workingProject.name}</span>
                </p>
            </div>
        </div>
    )
}
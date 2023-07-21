import styles from './styles.module.css';

import SkillSection from '@/app/Components/SkillSection/SkillSection';

export default function AboutMeContent() {
    const skillsData = [
        {
            title: "Linguagens",
            skills: [
                "NodeJS",
                "JavaScript",
                "TypeScript",
                ".NET C#"
            ]
        },
        {
            title: "Banco de Dados",
            skills: [
                "SQLite",
                "MySQL",
                "MariaDB"
            ]
        },
        {
            title: "Outros",
            skills: [
                "HTML",
                "CSS",
                "REST",
                "API"
            ]
        },
        {
            title: "Ferramentas",
            skills: [
                "VS Code",
                "GIT",
                "GitHub",
                "Windows",
                "Linux"
            ]
        },
        {
            title: "Framework",
            skills: [
                "React",
                "Next.js",
                "Express"
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title_desc}>
                <h2 className={styles.title}>Sobre mim</h2>
                <p className={styles.description}>
                    Quem sou eu?
                </p>
            </div>

            <div className={styles.content}>
                <p>
                    Amante de tecnologia e jogos digitais desde meus primeiros contatos com computadores, sempre estudando e se aperfeiçoando nas tecnologias do momento.
                </p>

                <p>
                    Formado pela FATEC Praia Grande no curso de Análise e Desenvolvimento de Sistemas, onde aprendi um pouco sobre as etapas na área de tecnologia, desde o planejamento de uma aplicação informatizada até seu desenvolvimento.
                </p>

                <p>
                    Recentemente formado pela ETEC Adolpho Berezin no curso de Informática, onde revisei alguns conceitos em Informática, além de materias com maior ênfase em Suporte Técnico e Suporte ao Usuário.
                </p>

                <p>
                    Foi durante o curso de Informática onde, como trabalho de conclusão de curso, nosso grupo desenvolveu um projeto completo, desde seu planejamento a execução. Esse projeto consiste em uma Plataforma de Marketplace com foco no segmento geek/nerd, onde o cliente pode tanto adquirir produtos relacionados, como magas, action figures e mais, como vender estes produtos.

                </p>

                <p>
                    Sigo estudando tecnologias de desenvolvimento de software em ReactJs, desenvolvendo projetos e os disponibilizando no GitHub.

                </p>

                <p>
                    Especialidades:<br />
                    Prestação de Serviços, Microsserviços, Tecnologia da Informação, Informática, Análise e Desenvolvimento de Sistemas, Desenvolvimento Web, Desenvolvimento para a Internet, Suporte ao Usuário, Suporte Técnico, Front-End, Back-End, Fullstack, HTML, CSS, Javascript, .NET C#, ReactJs, MySQL.
                </p>
            </div>

            <div className={styles.skills}>
                <h3 className={styles.title}>
                    Skills
                </h3>
                <div className={styles.skills_content}>
                    <div className={styles.group}>
                        {
                            skillsData.map(section => <SkillSection key={section.title} data={section} />)
                        }
                    </div>
                </div>
            </div>

            <div className={styles.fun_facts}>
                <h3 className={styles.title}>
                    Fatos sobre mim
                </h3>
                <ul className={styles.items}>
                    <li className={styles.item}>Gosto de praticar <b>programação</b> diariamente</li>
                    <li className={styles.item}>Gosto de <b>animes</b></li>
                    <li className={styles.item}>Me exercito de <b>segunda à sábado</b></li>
                    <li className={styles.item}>Gosto de jogar online</li>
                </ul>
            </div>
        </div>
    )
}
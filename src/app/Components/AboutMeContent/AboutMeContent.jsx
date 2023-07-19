import styles from './styles.module.css';

export default function AboutMeContent() {
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
        </div>
    )
}
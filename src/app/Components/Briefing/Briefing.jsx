import styles from './styles.module.css';

import Link from 'next/link';
import Image from 'next/image';

import portfolioImage from '../../../images/projetos/portfolio/portfolio_home.png';

export default function Home() {
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
                        className={styles.working_image}
                        src={portfolioImage}
                        alt='Imagem de exemplo do Projeto do Portfolio'
                        priority
                    />
                </div>
                <p className={styles.working_description}>
                    <span className={styles.working_color}></span>
                    Atualmente trabalhando no <span className={styles.working_enfasis}>Portfólio</span>
                </p>
            </div>
        </div>
    )
}
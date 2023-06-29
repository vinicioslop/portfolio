import briefingStyle from './briefing.module.css';

import Link from 'next/link';
import Image from 'next/image';

import portfolioImage from '../../../images/projetos/portfolio/portfolio_home.png';

export default function Home() {
    return (
        <div className={briefingStyle.briefing_container}>
            <div className={briefingStyle.briefing}>
                <h2 className={briefingStyle.title}>
                    Aspirante a <span className={briefingStyle.important}>Desenvolvedor</span>, tanto <span className={briefingStyle.important}>Web</span> como <span className={briefingStyle.important}>Fullstack</span>
                </h2>
                <p className={briefingStyle.description}>Desenvolvo pequenos projetos pessoais como prática e realizo pequenos serviços para possíveis clientes e amigos.</p>
                <Link target="_blank" href="https://social.vinicioslop.com.br">
                    <button className={briefingStyle.contact_button}>Me contate !!</button>
                </Link>
            </div>
            
            <div className={briefingStyle.working_on}>
                <div className={briefingStyle.working_image_background}>
                    <Image
                        className={briefingStyle.working_image}
                        src={portfolioImage}
                        alt='Imagem de exemplo do Projeto do Portfolio'
                    />
                </div>
                <p className={briefingStyle.working_description}>
                    <span className={briefingStyle.working_color}></span>
                    Atualmente trabalhando no <span className={briefingStyle.working_enfasis}>Portfólio</span>
                </p>
            </div>
        </div>
    )
}
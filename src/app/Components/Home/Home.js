import homeStyle from './home.module.css';

import Link from 'next/link';

export default function Home() {
    return (
        <div className={homeStyle.home_container}>
            <div className={homeStyle.briefing}>
                <h2 className={homeStyle.title}>
                    Aspirante a <span className={homeStyle.important}>Desenvolvedor</span>, tanto <span className={homeStyle.important}>Web</span> como <span className={homeStyle.important}>Fullstack</span>
                </h2>
                <p className={homeStyle.description}>Desenvolvo pequenos projetos pessoais como prática e realizo pequenos serviços para possíveis clientes e amigos.</p>
                <Link target="_blank" href="https://social.vinicioslop.com.br">
                    <button className={homeStyle.contact_button}>Me contate !!</button>
                </Link>
            </div>
            <div className={homeStyle.working_on}>
                <div className={homeStyle.working_color}></div>
                <p className={homeStyle.working_description}>
                    Atualmente trabalhando no <span className={homeStyle.working_enfasis}>Portfólio</span>
                </p>
            </div>
        </div>
    )
}
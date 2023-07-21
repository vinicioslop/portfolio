import styles from "./styles.module.css";

import aboutMeCover from '@/images/aboutme/aboutme.jpg';
import arrowRightDashed from '@/icons/arrow-right-dashed.svg';

import Link from "next/link";
import Image from "next/image";

import Title from "../Title/Title";

export default function AboutMe() {
    const titleData = {
        title: "Sobre Mim",
        link: "/about-me"
    }

    return (
        <div className={styles.container}>
            <Title titleData={titleData} more={true}/>
            <div className={styles.aboutme_content}>
                <div className={styles.content_cover}>
                    <div className={styles.content}>
                        <p>
                            Eai, sou Vinícius Lopes!
                        </p>
                        <p>
                            Formado Tecnólogo em Análise e Desenvolvimento de Sistemas pela Fatec Praia Grande e Técnico em Informática pela ETEC Adolpho Berezin. Sou exposto a programação desde a minha graduação e desenvolvo pequenos projetos, como prática e exibir as minhas habilidades nas mais díversas linguagens.
                        </p>
                        <p>
                            Além dos projetos que desenvolvo realizado pequenos serviços de manutenção de computadores. Curioso? 😉
                        </p>

                        <Link className={styles.link} href="/about-me">
                            <button>
                                <span>Saiba mais</span>
                                <Image className={styles.arrow_right} src={arrowRightDashed} height={24} width={24} alt="Ícone de seta para direita" />
                            </button>
                        </Link>
                    </div>
                    <Image
                        className={styles.cover}
                        src={aboutMeCover}
                        width="auto"
                        height="auto"
                        alt="Imagem ilustrativa para skills."
                    />
                </div>
            </div>
        </div>
    )
}
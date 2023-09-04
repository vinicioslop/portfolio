import Link from 'next/link';
import Image from 'next/image';

import styles from "./styles.module.css";
import Title from "@/app/Components/DefaultComponents/Title/Title";

import emailIcon from '@/icons/email.svg';
import treeIcon from '@/icons/tree.svg';

export default function ContactCover() {
    const titleData = {
        title: "Contato",
        link: "/contacts"
    }

    return (
        <div className={styles.container}>
            <Title titleData={titleData} more={false} />
            <div className={styles.contact_content}>
                <div className={styles.text}>
                    Estou interessado em oportunidades em desenvolvimento, tanto front quanto back, além de serviços de manutenção em computadores e notebooks. Caso queira entrar em contato comigo, ou tirar dúvidas só chamar. ✌️
                </div>
                <div className={styles.box}>
                    <h3 className={styles.title}>
                        Entre em contato comigo 😎
                    </h3>
                    <div className={styles.items}>
                        <Link className={styles.item} href="mailto:contato@vinicioslop.com.br">
                            <Image className={styles.icon} src={emailIcon} width={24} height={24} alt="Ícone de um envelope." />
                            <span>
                                contato@vinicioslop.com.br
                            </span>
                        </Link>
                        <Link className={styles.item} href="https://social.vinicioslop.com.br" target="_blank">
                            <Image className={styles.icon} src={treeIcon} width={24} height={24} alt="Ícone de uma árvore." />
                            <span>
                                Social Tree
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
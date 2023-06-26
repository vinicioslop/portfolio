import servicesStyle from './services.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

export default function Services() {
    return (
        <div className={servicesStyle.services_container}>
            <div className={servicesStyle.title_container}>
                <h2 className={servicesStyle.title}>
                    <span>#</span>servicos
                </h2>
                <div className={servicesStyle.line_container}>
                    <hr />
                </div>
                <Link className={servicesStyle.link} href='/'>
                    <span className={servicesStyle.content}>Veja todos</span>
                    <Image src={arrowRightIcon} height={20} width={20} alt='ícone de seta para direita'/>
                </Link>
            </div>
            <div className={servicesStyle.services_group}>
                <div className={servicesStyle.service_item}>
                    <div className={servicesStyle.service_image}>
                        IMAGEM
                    </div>
                    <hr />
                    <div className={servicesStyle.service_description}>
                        Descrição
                    </div>
                </div>
                <div className={servicesStyle.service_item}>
                    <div className={servicesStyle.service_image}>
                        IMAGEM
                    </div>
                    <hr />
                    <div className={servicesStyle.service_description}>
                        Descrição
                    </div>
                </div>
                <div className={servicesStyle.service_item}>
                    <div className={servicesStyle.service_image}>
                        IMAGEM
                    </div>
                    <hr />
                    <div className={servicesStyle.service_description}>
                        Descrição
                    </div>
                </div>
            </div>
        </div>
    )
}
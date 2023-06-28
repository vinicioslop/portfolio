import servicesStyle from './services.module.css';

import ServiceCard from '../ServiceCard/ServiceCard';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

import hardwareManutentionImage from '../../../images/servicos/hardware_manutention.jpg';
import systemUpgradeImage from '../../../images/servicos/system_upgrade.jpg';
import webDevelopmentImage from '../../../images/servicos/web_development.jpg';

export default function Services() {
    const services = [
        {
            serviceId: 'hardwareManutention',
            serviceImage: hardwareManutentionImage,
            serviceImageAlt: 'Foto de <a href="https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JESHOOTS.COM</a> na <a href="https://unsplash.com/pt-br/fotografias/sMKUYIasyDM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            serviceTitle: 'Manutenção de Computadores',
            serviceDescription: 'Realizo a análise e resolução de problemas técnicos em computadores de mesa e laptops.'
        },
        {
            serviceId: 'systemUpgrade',
            serviceImage: systemUpgradeImage,
            serviceImageAlt: 'Foto de <a href="https://unsplash.com/@samsungmemory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samsung Memory</a> na <a href="https://unsplash.com/pt-br/fotografias/gAQyWMntC5w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            serviceTitle: 'Orçamento para melhorias de sistemas',
            serviceDescription: 'Realizo a análise e orçamento de possíveis melhorias para sistemas, computador de mesa ou laptop, além de orçamento para montagem de computadores completos.'
        },
        {
            serviceId: 'webDevelopment',
            serviceImage: webDevelopmentImage,
            serviceImageAlt: 'Foto de <a href="https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fotis Fotopoulos</a> na <a href="https://unsplash.com/pt-br/fotografias/DuHKoV44prg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
            serviceTitle: 'Orçamento para melhorias de sistemas',
            serviceDescription: 'Realizo a análise e orçamento de possíveis melhorias para sistemas, computador de mesa ou laptop, além de orçamento para montagem de computadores completos.'
        }
    ];

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
                    <Image src={arrowRightIcon} height={20} width={20} alt='ícone de seta para direita' />
                </Link>
            </div>
            <div className={servicesStyle.services_group}>

                {services.map(service => <ServiceCard key={service.serviceId} serviceInformation={service} />)}

            </div>
        </div>
    )
}
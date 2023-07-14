import serviceCardStyle from './styles.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ serviceInformation }) {
    return (
        <div className={serviceCardStyle.service_card}>
            <div className={serviceCardStyle.service_image_container}>
                <Image
                    className={serviceCardStyle.service_image}
                    src={serviceInformation.serviceImage}
                    alt={serviceInformation.serviceImageAlt}
                />
            </div>
            <hr />
            <div className={serviceCardStyle.service_description_container}>
                <h3 className={serviceCardStyle.title}>
                    {serviceInformation.serviceTitle}
                </h3>
                <p className={serviceCardStyle.service_description}>
                    {serviceInformation.serviceDescription}
                </p>
                <Link className={serviceCardStyle.link} href='https://social.vinicioslop.com.br' target='_blank'>
                    <button>Entre em contato</button>
                </Link>
            </div>
        </div>
    )
}
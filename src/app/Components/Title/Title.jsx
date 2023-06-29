import titleStyle from './title.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

export default function Title({ titleData }) {
    return (
        <div className={titleStyle.title_container}>
            <h2 className={titleStyle.title}>
                <span>#</span>{titleData.title}
            </h2>
            <div className={titleStyle.line_container}>
                <hr />
            </div>
            <Link className={titleStyle.link} href={titleData.link}>
                <span className={titleStyle.content}>Veja todos</span>
                <Image src={arrowRightIcon} height={20} width={20} alt='ícone de seta para direita' />
            </Link>
        </div>
    )
}
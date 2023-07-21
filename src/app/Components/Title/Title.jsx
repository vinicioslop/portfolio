import styles from './styles.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

export default function Title({ titleData, more }) {
    const seeMore = more ?
        <Link className={styles.link} href={titleData.link}>
            <span className={styles.content}>Veja todos</span>
            <Image className={styles.icon} src={arrowRightIcon} height='auto' width='auto' alt='Ícone de seta para direita' />
        </Link>
        : <></>;

    return (
        <div className={styles.title_container}>
            <h2 className={styles.title}>
                {titleData.title}
            </h2>
            <div className={styles.line_container}>
                <hr />
            </div>
            
            {seeMore}
        </div>
    )
}
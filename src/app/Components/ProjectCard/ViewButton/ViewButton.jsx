import styles from '../styles.module.css';

import Link from 'next/link';
import Image from 'next/image';

import githubIcon from '@/icons/github.svg';
import globeIcon from '@/icons/globe.svg';

export default function ViewButton({ type, link, alt, text }) {
    const icon = type === 'github' ? githubIcon : globeIcon;

    return (
        <Link className={styles.link} href={link} target='_blank'>
            <button>
                <Image className={styles.icon} src={icon} width='auto' height='auto' alt={alt} />
                <span>{text}</span>
            </button>
        </Link>
    );
}
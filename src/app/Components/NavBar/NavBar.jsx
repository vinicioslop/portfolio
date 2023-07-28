import styles from './styles.module.css';

import Link from 'next/link';

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/">
                <h1>
                    vinicioslop
                </h1>
            </Link>
            <div className={styles.links}>
                <Link className={styles.link} href="/">
                    <p>Home</p>
                </Link>
                <Link className={styles.link} href="/projects">
                    <p>Projetos</p>
                </Link>
                <Link className={styles.link} href="/about-me">
                    <p>Sobre Mim</p>
                </Link>
            </div>
        </div>
    )
}
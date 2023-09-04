import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer>
                <div className={styles.copyright}>
                    <span>&copy;</span>Copyright 2023. Feito por Vinícius Lopes
                </div>
            </footer>
        </div>
    )
}
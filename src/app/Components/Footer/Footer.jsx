import footerStyle from './styles.module.css';

export default function Footer() {
    return (
        <div className={footerStyle.footer_container}>
            <footer>
                <div className={footerStyle.copyright}>
                    <span>&copy;</span>Copyright 2023. Feito por Vinícius Lopes
                </div>
            </footer>
        </div>
    )
}
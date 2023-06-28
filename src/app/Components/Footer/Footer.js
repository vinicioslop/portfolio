import footerStyle from './footer.module.css';

export default function Footer() {
    return (
        <div className={footerStyle.footer_container}>
            <hr />
            <footer>
                <div className={footerStyle.title_email_description_group}>
                    <div className={footerStyle.title_email_group}>
                        <h1 className={footerStyle.title}>vinicioslop</h1>
                        <span className={footerStyle.email}>contato@vinicioslop.com.br</span>
                    </div>
                    <p className={footerStyle.description}>
                        Suporte Técnico e Desenvolvedor Full Stack
                    </p>
                </div>
                <div className={footerStyle.copyright}>
                    <span>&copy;</span>Copyright 2023. Feito por Vinícius Lopes
                </div>
            </footer>
        </div>
    )
}
import Link from 'next/link';
import navbarStyle from './navbar.module.css';

export default function NavBar() {
    return (
        <div className={navbarStyle.navbar}>
            <Link className={navbarStyle.logo} href="/">
                <h1>
                    vinicioslop
                </h1>
            </Link>
            <div className={navbarStyle.links}>
                <Link className={navbarStyle.link} href="/">
                    <p>Home</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p>Serviços</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p>Projetos</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p>Sobre Mim</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p>Contato</p>
                </Link>
            </div>
        </div>
    )
}
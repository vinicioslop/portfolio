import Link from 'next/link';
import navbarStyle from './navbar.module.css';

export default function NavBar() {
    return (
        <div className={navbarStyle.navbar}>
            <div className={navbarStyle.logo}>
                <h1>
                    <span>#</span>vinicioslop
                </h1>
            </div>
            <div className={navbarStyle.links}>
                <Link className={navbarStyle.link} href="/">
                    <p><span>#</span>home</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p><span>#</span>servicos</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p><span>#</span>projetos</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p><span>#</span>sobre-mim</p>
                </Link>
                <Link className={navbarStyle.link} href="/">
                    <p><span>#</span>contato</p>
                </Link>
            </div>
        </div>
    )
}
import projetosStyle from './projetos.module.css';

import Link from 'next/link';
import Image from 'next/image';

import arrowRightIcon from '../../../icons/arrow-right.svg';

export default function Projetos() {
    return (
        <div className={projetosStyle.projetos_container}>
            <div className={projetosStyle.title_container}>
                <h2 className={projetosStyle.title}>
                    <span>#</span>projetos
                </h2>
                <div className={projetosStyle.line_container}>
                    <hr />
                </div>
                <Link className={projetosStyle.link} href='/'>
                    <span className={projetosStyle.content}>Veja todos</span>
                    <Image src={arrowRightIcon} height={20} width={20}/>
                </Link>
            </div>
        </div>
    )
}
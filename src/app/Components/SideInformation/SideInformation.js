import SideInformationStyle from './sideinformation.module.css';

// componente do next js para lidar com imagens
import Image from 'next/image';

// minha foto
import myPic from '../../../images/pic.png';

// ícones
import mapPin from '../../../icons/map-pin.svg';
import briefcase from '../../../icons/briefcase.svg';
import github from '../../../icons/github.svg';
import linkedin from '../../../icons/linkedin.svg';
import globe from '../../../icons/globe.svg';
import mail from '../../../icons/mail.svg';

export default function SideInformation() {
    return (
        <div className={SideInformationStyle.side_information}>
            <div className={SideInformationStyle.pic_card}>
                <div className={SideInformationStyle.pic_image_background}>
                    <Image
                        priority
                        className={SideInformationStyle.pic_author}
                        src={myPic}
                        width={130}
                        height={130}
                        alt="Picture of the author"
                    />
                </div>
                <h1 className={SideInformationStyle.pic_name}>Vinícius Lopes Lima</h1>
                <p className={SideInformationStyle.pic_role}>Fullstack Developer</p>
            </div>
            <div className={SideInformationStyle.my_information}>
                <ul className={SideInformationStyle.information_list}>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={mapPin}
                            width={18}
                            height={18}
                            alt="Picture of the map pin"
                        />
                        <p>Brazil</p>
                    </li>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={briefcase}
                            width={18}
                            height={18}
                            alt="Picture of a briefcase"
                        />
                        <p>Student</p>
                    </li>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={github}
                            width={18}
                            height={18}
                            alt="Picture of the GitHub logo"
                        />
                        <p>vinicioslop</p>
                    </li>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={linkedin}
                            width={18}
                            height={18}
                            alt="Picture of the LinkedIn logo"
                        />
                        <p>viniciuslopeslima</p>
                    </li>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={globe}
                            width={18}
                            height={18}
                            alt="Picture of the World Globe"
                        />
                        <p>To implement</p>
                    </li>
                    <li className={SideInformationStyle.information_list_item}>
                        <Image
                            className={SideInformationStyle.icon}
                            src={mail}
                            width={18}
                            height={18}
                            alt="Picture of a letter for email"
                        />
                        <p>vinicioslop7@hotmail.com</p>
                    </li>
                </ul>
            </div>
            <div className={SideInformationStyle.technologies}>
                <h2 className={SideInformationStyle.section_title}>
                    Tecnologias
                </h2>
                <div className={SideInformationStyle.list_technologies}>
                    <span className={SideInformationStyle.list_technologies_item}>Javascript</span>
                    <span className={SideInformationStyle.list_technologies_item}>ReactJs</span>
                    <span className={SideInformationStyle.list_technologies_item}>.NET</span>
                    <span className={SideInformationStyle.list_technologies_item}>C#</span>
                    <span className={SideInformationStyle.list_technologies_item}>HTML</span>
                    <span className={SideInformationStyle.list_technologies_item}>CSS</span>
                    <span className={SideInformationStyle.list_technologies_item}>Git</span>
                    <span className={SideInformationStyle.list_technologies_item}>GitHub</span>
                    <span className={SideInformationStyle.list_technologies_item}>MySQL</span>
                    <span className={SideInformationStyle.list_technologies_item}>SQlite</span>
                </div>
            </div>
            <div className={SideInformationStyle.experience_education}>
                <h2 className={SideInformationStyle.section_title}>
                    Experiência
                </h2>
                <ul className={SideInformationStyle.experience_list}>
                    <li className={SideInformationStyle.experience_education_list_item}>
                        <p className={SideInformationStyle.title}>ETEC Adolpho Berezin</p>
                        <p className={SideInformationStyle.time}>2021 - 2022</p>
                        <p className={SideInformationStyle.description}>Desenvolvedor Fullstack</p>
                    </li>
                    <li className={SideInformationStyle.experience_education_list_item}>
                        <p className={SideInformationStyle.title}>Quest Info</p>
                        <p className={SideInformationStyle.time}>2018 - 2018</p>
                        <p className={SideInformationStyle.description}>Estagiário</p>
                    </li>
                </ul>
            </div>
            <div className={SideInformationStyle.experience_education}>
                <h2 className={SideInformationStyle.section_title}>
                    Formação Acadêmica
                </h2>
                <ul className={SideInformationStyle.education_list}>
                    <li className={SideInformationStyle.experience_education_list_item}>
                        <p className={SideInformationStyle.title}>Faculdade de Tecnologia de Praia Grande</p>
                        <p className={SideInformationStyle.time}>2017 - 2019</p>
                        <p className={SideInformationStyle.description}>Analise e Desenvolvimento de Sistemas</p>
                    </li>
                    <li className={SideInformationStyle.experience_education_list_item}>
                        <p className={SideInformationStyle.title}>ETEC Adolpho Berezin</p>
                        <p className={SideInformationStyle.time}>2021 - 2022</p>
                        <p className={SideInformationStyle.description}>Técnico em Informática</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
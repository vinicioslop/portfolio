import Image from 'next/image';

/*
  
*/

import styles from './page.module.css';

import myPic from '../images/pic.png';

import mapPin from '../icons/map-pin.svg';
import briefcase from '../icons/briefcase.svg';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import globe from '../icons/globe.svg';
import mail from '../icons/mail.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1>Portfolio</h1>
      </div>
      <div className={styles.side_information}>
        <div className={styles.pic_card}>
          <div className={styles.pic_image_background}>
            <Image
              className={styles.pic_author}
              src={myPic}
              width={130}
              height={130}
              alt="Picture of the author"
            />
          </div>
          <h1 className={styles.pic_name}>Vinícius Lopes Lima</h1>
          <p className={styles.pic_role}>Fullstack Developer</p>
        </div>
        <div className={styles.my_information}>
          <ul className={styles.information_list}>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={mapPin}
                width={18}
                height={18}
                alt="Picture of the map pin"
              />
              <p>Brazil</p>
            </li>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={briefcase}
                width={18}
                height={18}
                alt="Picture of a briefcase"
              />
              <p>Student</p>
            </li>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={github}
                width={18}
                height={18}
                alt="Picture of the GitHub logo"
              />
              <p>vinicioslop</p>
            </li>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={linkedin}
                width={18}
                height={18}
                alt="Picture of the LinkedIn logo"
              />
              <p>viniciuslopeslima</p>
            </li>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={globe}
                width={18}
                height={18}
                alt="Picture of the World Globe"
              />
              <p>To implement</p>
            </li>
            <li className={styles.information_list_item}>
              <Image
                className={styles.icon}
                src={mail}
                width={18}
                height={18}
                alt="Picture of a letter for email"
              />
              <p>vinicioslop7@hotmail.com</p>
            </li>
          </ul>
        </div>
        <div className={styles.technologies}>
          <h2 className={styles.title}>
            Tecnologias
          </h2>
          <div className={styles.list_technologies}>
            <span className={styles.list_technologies_item}>Javascript</span>
            <span className={styles.list_technologies_item}>ReactJs</span>
            <span className={styles.list_technologies_item}>.NET</span>
            <span className={styles.list_technologies_item}>C#</span>
            <span className={styles.list_technologies_item}>HTML</span>
            <span className={styles.list_technologies_item}>CSS</span>
            <span className={styles.list_technologies_item}>Git</span>
            <span className={styles.list_technologies_item}>GitHub</span>
            <span className={styles.list_technologies_item}>MySQL</span>
            <span className={styles.list_technologies_item}>SQlite</span>
          </div>
        </div>
      </div>
    </main>
  )
}

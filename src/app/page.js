import styles from './page.module.css';

import SideInformation from './Components/SideInformation/SideInformation';
import NavBar from './Components/NavBar/NavBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SideInformation />
    </main>
  )
}

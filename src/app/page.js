import styles from './page.module.css';

import NavBar from './Components/NavBar/NavBar';
import MainContent from './Components/MainContent/MainContent';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <MainContent />
    </main>
  )
}

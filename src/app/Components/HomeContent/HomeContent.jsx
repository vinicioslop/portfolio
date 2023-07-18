import styles from './styles.module.css';

import Briefing from '@/app/Components/Briefing/Briefing';
import Services from '@/app/Components/Services/Services';
import ProjectsCover from '@/app/Components/ProjectsCover/ProjectsCover';
import Skills from '@/app/Components/Skills/Skills';
import AboutMe from '@/app/Components/AboutMe/AboutMe';
import Contact from '@/app/Components/Contact/Contact';

export default function HomeContent() {
  return (
    <div className={styles.container}>
      <Briefing />
      <Services />
      <ProjectsCover />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  )
}

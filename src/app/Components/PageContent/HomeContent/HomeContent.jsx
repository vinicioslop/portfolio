import styles from './styles.module.css';

import BriefingCover from '@/app/Components/PageContent/HomePage/BriefingCover/BriefingCover';
import ServicesCover from '@/app/Components/PageContent/HomePage/ServicesCover/ServicesCover';
import ProjectsCover from '@/app/Components/PageContent/HomePage/ProjectsCover/ProjectsCover';
import SkillsCover from '@/app/Components/PageContent/HomePage/Skills/SkillsCover/SkillsCover';
import AboutMeCover from '@/app/Components/PageContent/HomePage/AboutMeCover/AboutMeCover';
import ContactCover from '@/app/Components/PageContent/HomePage/ContactCover/ContactCover';

export default function HomePageContent() {
  return (
    <div className={styles.container}>
      <BriefingCover />
      <ServicesCover />
      <ProjectsCover />
      <AboutMeCover />
      <SkillsCover />
      <ContactCover />
    </div>
  )
}

import homeStyle from './home.module.css';

import Briefing from '@/app/Components/Briefing/Briefing';
import Services from '@/app/Components/Services/Services';
import Projects from '@/app/Components/Projects/Projects';
import Skills from '@/app/Components/Skills/Skills';
import AboutMe from '@/app/Components/AboutMe/AboutMe';
import Contact from '@/app/Components/Contact/Contact';
import Footer from '@/app/Components/Footer/Footer';

export default function Home() {
    return (
        <div className={homeStyle.home_container}>
            <Briefing />
            <Services />
            <Projects />
            <Skills />
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    )
}
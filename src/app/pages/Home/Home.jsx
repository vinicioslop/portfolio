import homeStyle from './home.module.css';

import Briefing from '../../Components/Briefing/Briefing';
import Services from '../../Components/Services/Services';
import Projects from '../../Components/Projects/Projects';
import Footer from '@/app/Components/Footer/Footer';

export default function Home() {
    return (
        <div className={homeStyle.home_container}>
            <Briefing />
            <Services />
            <Projects />
            <Footer />
        </div>
    )
}
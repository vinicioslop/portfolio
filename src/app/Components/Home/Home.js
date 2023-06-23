import homeStyle from './home.module.css';

import Briefing from '../Briefing/Briefing';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';

export default function Home() {
    return (
        <div className={homeStyle.home_container}>
            <Briefing />
            <Services />
            <Projects />
        </div>
    )
}
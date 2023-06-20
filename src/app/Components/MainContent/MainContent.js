import styles from './maincontent.module.css';

import Home from '../Home/Home.js';
import Projects from '../Projects/Projects';

export default function MainContent() {
    return (
        <div className={styles.main_content_body}>
            <Home />
            <Projects />
        </div>
    )
}
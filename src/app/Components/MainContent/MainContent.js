import styles from './maincontent.module.css';

import Home from '../Home/Home.js';
import Projetos from '../Projetos/Projetos';

export default function MainContent() {
    return (
        <div className={styles.main_content_body}>
            <Home />
            <Projetos />
        </div>
    )
}
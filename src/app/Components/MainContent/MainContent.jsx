import styles from './maincontent.module.css';

import Home from '../../pages/Home/Home';

export default function MainContent() {
    return (
        <div className={styles.main_content_body}>
            <Home />
        </div>
    )
}
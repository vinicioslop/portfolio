import styles from './styles.module.css';

import Home from '@/app/pages/Home/Home';

export default function MainContent() {
    return (
        <div className={styles.main_content_body}>
            <Home />
        </div>
    )
}
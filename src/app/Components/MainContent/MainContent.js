import styles from './maincontent.module.css';

import SideInformation from '../SideInformation/SideInformation';
import PrincipalContent from '../PrincipalContent/PrincipalContent';

export default function MainContent() {
    return (
        <div className={styles.main_content_body}>
            <SideInformation />
            <PrincipalContent />
        </div>
    )
}
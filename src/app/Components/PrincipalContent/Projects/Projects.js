import styles from './projects.module.css';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>
                Meus Projetos
            </h1>
            <div className={styles.projects_group}>
                <div className={styles.projects_group_item}>
                    Projeto 1
                </div>
                <div className={styles.projects_group_item}>
                    Projeto 2
                </div>
                <div className={styles.projects_group_item}>
                    Projeto 3
                </div>
                <div className={styles.projects_group_item}>
                    Projeto 4
                </div>
            </div>
        </div>
    )
}
import styles from './styles.module.css';

import ImageCover from './ImageCover/ImageCover';
import ViewButton from './ViewButton/ViewButton';

export default function ProjectCard({ data }) {
    const liveLink = data.live != '' ?
        <ViewButton
            type='online'
            link={data.live}
            alt='Ícone do globo terrestre'
            text='Online'
        />
        :
        <></>;

    return (
        <div className={styles.project_card}>
            <ImageCover data={data} />
            <div className={styles.project_technologies}>
                {data.technologies.map((technology, index) =>
                    <span key={data.projectId + 'Tec' + index}>{technology}</span>
                )}
            </div>
            <hr />
            <div className={styles.project_description}>
                <h3 className={styles.project_title}>
                    {data.title}
                </h3>
                <p className={styles.project_information}>
                    {data.information}
                </p>

                <div className={styles.button_group}>
                    <ViewButton
                        type='github'
                        link={data.github}
                        alt='Ícone da logo do GitHub'
                        text='GitHub'
                    />
                    {liveLink}
                </div>
            </div>
        </div>
    )
}
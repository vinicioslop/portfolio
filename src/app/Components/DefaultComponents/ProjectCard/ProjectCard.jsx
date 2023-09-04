import styles from './styles.module.css';

import ImageCover from './ImageCover/ImageCover';
import ViewButton from './ViewButton/ViewButton';

export default function ProjectCard({ data }) {
    const liveLink = data.liveUrl != '' ?
        <ViewButton
            type='online'
            link={data.liveUrl}
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
                    <span key={data.id + 'Tec' + index}>{technology}</span>
                )}
            </div>
            <hr />
            <div className={styles.project_description}>
                <h3 className={styles.project_title}>
                    {data.name}
                </h3>
                <p className={styles.project_information}>
                    {data.description}
                </p>

                <div className={styles.button_group}>
                    <ViewButton
                        type='github'
                        link={data.githubUrl}
                        alt='Ícone da logo do GitHub'
                        text='GitHub'
                    />
                    {liveLink}
                </div>
            </div>
        </div>
    )
}
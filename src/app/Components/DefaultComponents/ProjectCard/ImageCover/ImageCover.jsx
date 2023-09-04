import styles from '../styles.module.css';

import Image from 'next/image';

export default function ImageCover({ data }) {
    return data.imageUrl != '' ?
        <>
            <div className={styles.project_image_container}>
                <Image
                    width={500}
                    height={500}
                    className={styles.project_image}
                    src={data.imageUrl}
                    alt={data.imageAlt}
                    priority
                />
            </div>
            <hr />
        </>
        :
        <></>;
}
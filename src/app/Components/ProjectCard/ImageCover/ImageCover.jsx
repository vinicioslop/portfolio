import styles from '../styles.module.css';

import Image from 'next/image';

export default function ImageCover({ data }) {
    return data.imageCover != '' ?
        <>
            <div className={styles.project_image_container}>
                <Image
                    className={styles.project_image}
                    src={data.imageCover}
                    alt={data.imageAlt}
                    priority
                />
            </div>
            <hr />
        </>
        :
        <></>;
}
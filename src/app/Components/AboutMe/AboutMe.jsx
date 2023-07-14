import styles from "./styles.module.css";

import Title from "../Title/Title";

export default function AboutMe() {
    const titleData = {
        title: "Sobre Mim",
        link: "/"
    }

    return (
        <div className={styles.container}>
            <Title titleData={titleData} />
            
        </div>
    )
}
import styles from "./styles.module.css";

import Title from "@/app/Components/DefaultComponents/Title/Title";
import SkillSection from "../SkillSection/SkillSection";

export default function SkillsCover() {
    const titleData = {
        title: "Skills",
        link: "/about-me"
    }

    const firstSection = [
        {
            group: 1,
            title: "Linguagens",
            skills: [
                "NodeJS",
                "JavaScript",
                "TypeScript",
                ".NET C#"
            ]
        }
    ];
    const secondSection = [
        {
            group: 2,
            title: "Banco de Dados",
            skills: [
                "SQLite",
                "MySQL",
                "MariaDB"
            ]
        },
        {
            group: 2,
            title: "Outros",
            skills: [
                "HTML",
                "CSS",
                "REST",
                "API"
            ]
        }
    ];
    const thirdSection = [
        {
            group: 3,
            title: "Ferramentas",
            skills: [
                "VS Code",
                "GIT",
                "GitHub",
                "Windows",
                "Linux"
            ]
        },
        {
            group: 3,
            title: "Framework",
            skills: [
                "React",
                "Next.js",
                "Express"
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <Title titleData={titleData} more={false}/>
            <div className={styles.skills_group}>
                <div className={styles.group}>
                    {
                        firstSection.map(section => <SkillSection key={section.title} data={section} />)
                    }
                </div>

                <div className={styles.group}>
                    {
                        secondSection.map(section => <SkillSection key={section.title} data={section} />)
                    }
                </div>

                <div className={styles.group}>
                    {
                        thirdSection.map(section => <SkillSection key={section.title} data={section} />)
                    }
                </div>
            </div>
        </div>
    )
}
import skillsStyle from './skills.module.css';

import Title from '../Title/Title';

export default function Skills() {
    const titleData = {
        title: "skills",
        link: "/"
    }

    return (
        <div className={skillsStyle.container}>
            <Title titleData={titleData} />
        </div>
    )
}
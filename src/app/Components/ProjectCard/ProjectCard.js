import projectCardStyle from './projectcard.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard( { data } ) {
    return (
        <div className={projectCardStyle.project_card}>
            <div className={projectCardStyle.project_image_container}>
                <Image className={projectCardStyle.project_image} src={data.imageCover} />
            </div>
            <hr />
            <div className={projectCardStyle.project_technologies}>
                {data.technologies.map((technology) => <span>{technology}</span>)}
            </div>
            <hr />
            <div className={projectCardStyle.project_description}>
                <h3 className={projectCardStyle.project_title}>{data.title}</h3>
                <p className={projectCardStyle.project_information}>{data.information}</p>
                <div className={projectCardStyle.button_group}>
                    <button>GitHub</button>
                    <button>Online</button>
                </div>
            </div>
        </div>
    )
}
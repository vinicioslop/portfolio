import projectCardStyle from './projectcard.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ data }) {
    const liveLink = data.live != '' ?
        <Link href={data.live} target='_blank'>
            <button>Online</button>
        </Link>
        :
        <button>Online</button>;

    return (
        <div className={projectCardStyle.project_card}>
            <div className={projectCardStyle.project_image_container}>
                <Image className={projectCardStyle.project_image} src={data.imageCover} alt={data.imageAlt}/>
            </div>
            <hr />
            <div className={projectCardStyle.project_technologies}>
                {data.technologies.map((technology) => <span>{technology}</span>)}
            </div>
            <hr />
            <div className={projectCardStyle.project_description}>
                <h3 className={projectCardStyle.project_title}>
                    {data.title}
                </h3>
                <p className={projectCardStyle.project_information}>
                    {data.information}
                </p>

                <div className={projectCardStyle.button_group}>
                    <Link href={data.github} target='_blank'>
                        <button>GitHub</button>
                    </Link>
                    {liveLink}
                </div>
            </div>
        </div>
    )
}
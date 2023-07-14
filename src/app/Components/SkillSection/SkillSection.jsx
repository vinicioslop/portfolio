import style from './styles.module.css';

export default function Skills({ data }) {
    return (
        <div className={style.container}>
            <div className={style.title}>{data.title}</div>
            <hr />
            <ul className={style.items}>
                {data.skills.map(skill => <li key={skill} className={style.item}>{skill}</li>)}
            </ul>
        </div>
    )
}
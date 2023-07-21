import style from './styles.module.css';

export default function Skills({ data }) {
    return (
        <div className={style.container}>
            <h4 className={style.title}>{data.title}</h4>
            <hr />
            <ul className={style.items}>
                {data.skills.map(skill => <li key={skill} className={style.item}>{skill}</li>)}
            </ul>
        </div>
    )
}
import style from './cardHeader.module.css';

function cardHeader({props}) {
    return (
        <>
            <h4>{props.title}</h4>
            <p className={style["date-of-issue"]}>{props.create_at}</p>
        </>
    )
}

export default cardHeader;

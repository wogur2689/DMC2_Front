import style from './cardBody.module.css';

function cardBody({props}) {
    return (
        <>
            <div className={style["detail-img"]}>
                <img src={`data:image/png;base64,${props.imgEncoding}`} alt="image" className={style["imgSrc"]}/>
            </div>
            <div className={style["explanation"]}></div>
            <div className={style["content-descriptions"]}>{props.content}</div>
        </>
    )
}

export default cardBody;


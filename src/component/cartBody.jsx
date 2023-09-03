import style from './cardBody.module.css';

function cardBody() {
    return (
        <>
            <div className={style["detail-img"]}></div>
            <div className={style["explanation"]}></div>
            <div className={style["content-descriptions"]}>
                내용
            </div>
        </>
    )
}

export default cardBody;


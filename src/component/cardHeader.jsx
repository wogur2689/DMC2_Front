import style from './cardHeader.module.css';

function cardHeader() {
    return (
        <>
            <h1>제목</h1>
            <p className={style["date-of-issue"]}>작성일자</p>
        </>
    )
}

export default cardHeader;

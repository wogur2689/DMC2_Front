import style from "./detailCard.module.css";

export function DetailCard() {
  return (
    <main className={style["deatil-wrap"]}>
      <article className={style["detail-content"]}>
        <h1>제목</h1>
        <p className={style["date-of-issue"]}>작성일자</p>
        <div className={style["detail-img"]}>

        </div>
        <div className={style["explanation"]}>
          <p>여기는 간단설명란</p>
        </div>
        <div className={style["content-descriptions"]}>
          <p>내용</p>
          <ul>
            <li>신도림에서 학교가는 버스를 놓쳤다면?</li>
            <li>신도림에서 학교가는 버스를 놓쳤다면?</li>
            <li>신도림에서 학교가는 버스를 놓쳤다면?</li>
            <li>신도림에서 학교가는 버스를 놓쳤다면?</li>
          </ul>
        </div>
      </article>
    </main>
  );
}

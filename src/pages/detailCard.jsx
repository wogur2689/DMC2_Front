import CardHeader from "../component/cardHeader";
import CardBody from "../component/cartBody";
import style from "./detailCard.module.css";

export function DetailCard() {
  return (
    <main className={style["deatil-wrap"]}>
      <article className={style["detail-content"]}>
        <CardHeader/>
        <CardBody/>
      </article>
    </main>
  );
}

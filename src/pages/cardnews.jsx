import axios from "axios";
import { useEffect } from "react";
import style from "../pages/cardnews.module.css"

export function CardNews() {
  //1. api 호출해서 데이터 가져오기
  const fetchCardNews = async () => {
    const url = "http://localhost:8080/v1/api/card_news";

    try {
      const response = await axios.get(url);
      const data = response.data;

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCardNews();
  }, []);

  //2. 카드뉴스 map형식으로 반환
  return (
    <main className={style["card-wrap"]}>
      <div className={style["cards"]}>
      <article className={style["card"]}></article>
      <article className={style["card"]}></article>
      <article className={style["card"]}></article>
      <article className={style["card"]}></article>
      <article className={style["card"]}></article>
      </div>
    </main>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import style from "../pages/cardnews.module.css"

export function CardNews() {
  const [loading, setLoading] = useState(true); //로딩
  const [datas, setDatas] = useState([]); //데이터
  //admin에서 json으로 이미지파일 넘기는 기능도 구현.
  //기능 구현 3일 + api 뿌리기 1일 + 개인 테스트 1일

  //1. api 호출해서 데이터 가져오기
  const fetchCardNews = async () => {
    const url = "http://localhost:8888/v1/api/card_news";

    try {
      const res = await axios.get(url);
      setDatas(res.data.content);
      setLoading(false);
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
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className={style["cards"]}>
          {datas.map((v, idx) => (
            <article key={idx} className={style["card"]}>{v.title}</article> 
          ))}
        </div>
      )}
    </main>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import CardHeader from "../component/cardHeader";
import CardBody from "../component/cardBody";
import style from "./cardnews.module.css";
import datazip from '../data/data.json'; //목데이터


export function CardNews() {
  const [loading, setLoading] = useState(true); //로딩
  const [datas, setDatas] = useState([]); //데이터

  //1. api 호출해서 데이터 가져오기
  const fetchCardNews = async () => {
    //const url = "http://localhost:8888/v1/api/card_news"; //(backend)
    const url = process.env.PUBLIC_URL + '/data.json'; //(local)

    try {
      const res = await axios.get(url);
      console.log(res);
      setDatas(res.data.content);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCardNews();
    console.log(datas)
  }, []);

  //2. 카드뉴스 map형식으로 반환
  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {datazip.content.map((v) => (
            <main className={style["wrap"]}>
              <article className={style["detail-content"]}>
                <CardHeader props={v}/>
                <CardBody props={v}/>
              </article>
            </main>
          ))}
        </>
        )
      }
    </>
  );
}

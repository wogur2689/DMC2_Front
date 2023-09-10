import axios from "axios";
import { useEffect, useState } from "react";
import CardHeader from "../component/cardHeader";
import CardBody from "../component/CardBody";
import style from "./cardnews.module.css";
import datazip from '../data/data.json'; //목데이터
//<img src={`data:image/png;base64,${props.imgEncoding}`} alt="image" className={style["imgSrc"]}/> //이미지 불러오는 방법


export function CardNews() {
  const [loading, setLoading] = useState(true); //로딩
  const [datas, setDatas] = useState([]); //데이터
  //admin에서 json으로 이미지파일 넘기는 기능도 구현.
  //기능 구현 3일 + api 뿌리기 1일 + 개인 테스트 1일

  //1. api 호출해서 데이터 가져오기
  // const fetchCardNews = async () => {
  //   const url = "http://localhost:8888/v1/api/card_news";

  //   try {
  //     const res = await axios.get(url);
  //     setDatas(res.data.content);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCardNews();
  //   console.log(datas)
  // }, []);

  //2. 카드뉴스 map형식으로 반환
  return (
    <>
      {/* {loading ? (
        <span>Loading...</span>
      ) : (
        <> */}
          {datazip.content.map((v) => (
            <main className={style["wrap"]}>
              <article className={style["detail-content"]}>
                <CardHeader props={v}/>
                <CardBody props={v}/>
              </article>
            </main>
          ))}
        {/* </>
        )
      } */}
    </>
  );
}

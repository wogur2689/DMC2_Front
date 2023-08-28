import axios from "axios";
import { useEffect } from "react";

function CardNews() {
    //1. api 호출해서 데이터 가져오기
    useEffect(() => {
        console.log("카드 뉴스")
        axios
            .get('http://localhost:8080/v1/api/card_news')
            .then(res => console.log(res))
            .catch(err => console.error(err));
    },[])

    //2. 카드뉴스 map형식으로 반환
    return <>
        <h1>api 통신 테스트</h1>
    </>
}

export default CardNews;
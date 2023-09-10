import React, { useState } from "react";

import style from "./cardBody.module.css";

const CardBody =({ props })=> {
    const {imgEncoding, content} = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <div className={style["detail-img"]}>
        <img
          src={`data:image/png;base64,${imgEncoding}`}
          alt="image"
          className={style["imgSrc"]}
        />
      </div>
      <div className={style["explanation"]}></div>
      <div className={style["content-descriptions"]}>
        {/* 텍스트가 200자 이상이면 "더보기" 버튼을 표시 */}
        {content.length > 200 && !isExpanded ? (
          <div>
            {content.substring(0, 230)}...
            <button className={style["expand-btn"]} onClick={handleExpandClick}>더보기</button>
          </div>
        ) : (
          // 텍스트가 230자 이하이거나 "더보기" 버튼을 클릭하면 전체 텍스트 표시
          <div>{content}</div>
        )}
      </div>
    </>
  );
}

export default CardBody;

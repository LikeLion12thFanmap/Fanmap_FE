import React from "react";
import { useNavigate } from "react-router-dom";
import D from "../css/StyledMainDetail.module.css";

function Tag({ text }) {
  return <div className={D.tag}>{text}</div>;
}

function MainDetail() {
  const navigate = useNavigate();

  const handleAddToList = () => {
    navigate("/addplace");
  };

  return (
    <div className={D.container}>
      <img src="/img/main_bg.png" alt="bg" className={D.bg} />
      <input
        type="text"
        className={D.searchbar}
        placeholder="검색어를 입력하세요"
      />
      <div className={D.lens}></div>
      <div className={D.innerContainer}>
        <div className={D.placeTitle}>잭슨피자</div>
        <div className={D.mylistBtn} onClick={handleAddToList}>
          내 리스트 추가하기
        </div>
        <div className={D.review}>
          <img src="/img/star.png" alt="star" className={D.star} />
          <span className={D.reviewCount}>
            <span className={D.grade}>4.2</span> 리뷰 120
          </span>
          <div className={D.address}>
            <strong>주소:</strong> 서울특별시 송파구 잠실본동 올림픽로 74
            월드메르디앙 103호
            <strong>영업시간:</strong> 오전 11:00 ~ 오후 10:00 <br />
            <strong>전화번호:</strong>
            <span className={D.tel}>02-3432-0717</span>
          </div>
        </div>
        <div className={D.tags}>
          <Tag text="#직관맛집" />
          <Tag text="#화덕피자" />
          <Tag text="#1인피자" />
          {/* Add more tags as needed */}
        </div>
        <div className={D.detailImg}>
          <img src="/img/detailImg/l1.png" alt="left1" className={D.l1} />
          <img src="/img/detailImg/l2.png" alt="left2" className={D.l2} />
          <img src="/img/detailImg/c.png" alt="center" className={D.c} />
          <img src="/img/detailImg/r2.png" alt="right1" className={D.r2} />
          <img src="/img/detailImg/r1.png" alt="right2" className={D.r1} />
        </div>
        <div className={D.reviewTitle}>리뷰</div>
        <div className={D.tagKeyword}>
          <Tag text="#키워드" />
          <Tag text="#키워드" />
          <Tag text="#키워드" />
          <Tag text="#키워드" />
          <Tag text="#키워드" />
          <Tag text="#키워드" />
        </div>
        <div className={D.reviewImg}>
          <img
            src="/img/detailImg/review1.png"
            alt="review1"
            className={D.review}
          />
          <img src="/img/detailImg/review2.png" alt="review1" />
        </div>
      </div>
    </div>
  );
}

export default MainDetail;

import React from "react";
import { useNavigate } from "react-router-dom";
import P from "../css/StyledPlaceList.module.css";

function Store({ storeName, address }) {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/maindetail");
  };
  return (
    <div className={P.store}>
      <div className={P.bookmarkIcon}>
        <img src="/img/bookmark.png" alt="bookmark" />
      </div>
      <div className={P.storeName}>{storeName}</div>
      <div className={P.address}>{address}</div>
      <div className={P.detail}><span className={P.dText} style={{width:"180px"}}>자세히 보기</span></div>
    </div>
  );
}

function PlaceList() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={P.container}>
      <img src="/img/placelist_bg.png" alt="placelist" />
      <div className={P.titleBar}>
        <img
          src="/img/backBtn.png"
          className={P.backBtn}
          alt="backBtn"
          onClick={handleBackClick}
        />
        <img className={P.placeicon} src="/img/placeicon.png" alt="placeicon" />
        내 장소 리스트
        <div className={P.deleteBtn}>삭제</div>
      </div>
      <div className={P.list}>
        <div className={P.goodPlace}>
          <span className={P.gTitle}>맛집</span>
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
        </div>
        <div className={P.sharePlace}>
          <span className={P.sTitle}>나눔 장소</span>
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
        </div>
        <div className={P.etcPlace}>
          <span className={P.eTitle}>기타</span>
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
          <Store
            storeName="잭슨피자"
            address={`서울특별시 송파구 잠실본동 올림픽로 74 월드메르디앙 103호`}
          />
        </div>
      </div>
      <div className={P.blur}></div>
    </div>
  );
}

export default PlaceList;

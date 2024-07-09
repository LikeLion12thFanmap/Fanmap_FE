import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../css/StyledAddPlace.module.css";

function AddPlace() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <img
          src="\img\backBtn.png"
          className={styles.backBtn}
          alt="backBtn"
          onClick={handleBackClick}
        />
        <img className={styles.placeicon} src="\img\placeicon.png" alt="placeicon" />
        내 장소 등록
        <div className={styles.tempSaveBtn}>임시저장</div>
      </div>
      <div className={styles.placeImg}>
        <img src="\img\place.png" alt="place" />
      </div>
      <div className={styles.placeAddress}>
        <img src="\img\placepnt.png" alt="point" className={styles.pnt} />
        <span className={styles.address}>서울특별시 송파구 올림픽로 25</span>
        <div className={styles.replaceBtn}>위치 재설정하기</div>
      </div>

      <div className={styles.placeInfo}>
        <div className={styles.placeName}>
          장소 이름
          <input
            placeholder="텍스트를 입력해주세요."
            className={styles.inputBox}
            type="text"
          />
        </div>
        <div className={styles.placePurpose}>
          <span className={styles.pb}>장소의 목적</span>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="텍스트를 입력해주세요."
          />
        </div>
        <div className={styles.time}>
          활성화 시간<span className={styles.sp}>~</span>
          <input className={styles.timeBox} type="time" />
          <input className={styles.timeBox} type="time" />
        </div>
        <div className={styles.categoryWp}>
          카테고리
          <select className={styles.category}>
            <option value="none" selected>
              공유 대상
            </option>
            <option value="idol">아이돌</option>
            <option value="singer">가수</option>
            <option value="actor">배우</option>
            <option value="entertainer">예능인</option>
            <option value="athlete">운동선수</option>
            <option value="model">모델</option>
            <option value="2D">2D</option>
            <option value="etc-star">기타</option>
          </select>
          <select className={styles.item}>
            <option value="none" selected>
              공유하는 대상
            </option>
            <option value="goods">굿즈</option>
            <option value="eat">먹거리</option>
            <option value="promise">약속</option>
            <option value="item">물품</option>
            <option value="etc">기타</option>
          </select>
        </div>
        <div className={styles.condition}>
          필요 조건
          <input
            placeholder="텍스트를 입력해주세요."
            className={styles.inputBox}
            type="text"
          />
        </div>
        <div className={styles.additionalInfo}>
          추가 정보
          <input placeholder="외부링크" className={styles.inputBox} type="text" />
        </div>
        <div className={styles.img}>
          이미지
          <div className={styles.filebox}>
            <label htmlFor="file">파일찾기</label>
            <input type="file" className={styles.fileBox} />
          </div>
        </div>
      </div>
      <div className={styles.addBtn} >
        내 장소 등록하기
      </div>
    </div>
  );
}

export default AddPlace;

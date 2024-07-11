import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosSetup";
import { useLocation } from "react-router-dom";
import styles from "../css/StyledSetProfile.module.css";

function SetProfile() {
  const navigate = useNavigate(); 
  const location = useLocation();
  //회원가입 step1 때 부여된 user_id를 navigate시 넘겨받음
  const userId = location.state.userId;
  const [formData, setFormData] = useState({
    userid: '',
    pw: '',
    pwCheck: '',
    age: 'none',
    gender: 'none',
    email: '',
    emailDomain: 'none',
    nickname: '',
    birth_date: '',
    favorite_star: 'none'
  });
  //입력 값 변경 처리
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
    //api 요청 데이터 형식에 맞춰 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userId);
    const { age, gender, nickname, birth_date, favorite_star } = formData;
    const dataToSend = {
        user_id: userId,
        age: age,
        gender: gender === 'female' ? 'W' : gender === 'male' ? 'M' : 'O',
        profile: null,
        birth_date: birth_date,
        favorite_star: favorite_star,
        nickname: nickname,

    };
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/register/step2/', dataToSend);
      if (response.status === 200) {
        navigate("/main");
      }
    } catch (error) {
      console.error("정보전송에 실패했습니다.", error);
    }
  };
    //뒤로 가기 버튼
  const backBtn = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.navbar}>
          <img
            src="/img/backBtn.png"
            alt="back button"
            className={styles.backBtn}
            onClick={backBtn}
          />
          회원가입
        </div>
        <div className={styles.signupTitle}>내 프로필<br/>설정을 해볼까요?</div>
        <div className={styles.profileTitle}>
          프로필 설정
          <span className={`${styles.pt} ${styles.notif}`}>
            *표시는 필수 입력 항목입니다.
          </span>
        </div>
        
        <div className={`${styles.ageWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={styles.fx0}> <span className={styles.pt}>*</span>연령대</div>
            <div className={styles.fx3}>
              <select
                name="age"
                id="age"
                className={`${styles.ddBox} ${styles.defaultStyleNone}`}
                value={formData.ageRange}
                onChange={handleInputChange}
              >
                <option value="none">선택</option>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40~50대">40~50대</option>
                <option value="그 이상">그 이상</option>
                <option value="선택안함">선택안함</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${styles.genderWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={styles.fx0}>성별</div>
            <div className={styles.fx3}>
              <select
                name="gender"
                id="gender"
                className={`${styles.ddBox} ${styles.defaultStyleNone}`}
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="none">선택</option>
                <option value="female">여자</option>
                <option value="male">남자</option>
                <option value="etc-gen">기타</option>
              </select>
            </div>
          </div>
        </div>
       
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <img src="img/profile.png" alt="profile" />
            <img src="img/addImg.png" alt="add profile img" className={styles.addImg} />
          </div>
          <div className={`${styles.nicknameWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}> <span className={styles.pt}>*</span>닉네임</div>
              <div className={styles.fx3}>
                <input
                  type="text"
                  required
                  placeholder="닉네임을 입력하세요."
                  className={`${styles.defaultStyleNone} ${styles.nicknameBox}`}
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.birthWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}> <span className={styles.pt}>*</span>생년월일</div>
              <div className={styles.fx3}>
                <input
                  type="date"
                  required
                  placeholder="날짜 선택"
                  name="birth_date"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.starWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>내 스타</div>
              <div className={styles.fx3}>
                <select
                  name="favorite_star"
                  id="favorite_star"
                  className={`${styles.ddBox} ${styles.defaultStyleNone} ${styles.starBox}`}
                  value={formData.star}
                  onChange={handleInputChange}
                >
                  <option value="none">선택</option>
                  <option value="idol">아이돌</option>
                  <option value="singer">가수</option>
                  <option value="actor">배우</option>
                  <option value="entertainer">예능인</option>
                  <option value="athlete">운동선수</option>
                  <option value="model">모델</option>
                  <option value="2D">2D</option>
                  <option value="etc-star">기타</option>
                </select>
              </div>
            </div>
          </div>
        </div>
       
        <div className={styles.completeBtn} onClick={handleSubmit}>
          <span className={styles.completeCmt}>회원가입 완료</span>
        </div>
      </form>
    </div>
  );
}

export default SetProfile;

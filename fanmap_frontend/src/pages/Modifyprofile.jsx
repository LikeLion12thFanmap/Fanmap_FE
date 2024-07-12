import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledModifyProfile.module.css";

function ModifyProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("img/profile.png");
  const [fileInputVisible, setFileInputVisible] = useState(false);

  const handleComplete = () => {
    navigate("/main");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickAddImage = () => {
    // 이미지 클릭 시 파일 선택 input 보이게 설정
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      fileInput.click();
    }
    console.log("clicked!");
  };

  return (
    <div className={styles.form}>
      <div className={`${styles.join} ${styles.joinTitle}`}>
        <div>
          내 정보 수정
          <span className={`${styles.pt} ${styles.notif}`}>
            *표시는 필수 입력 항목입니다.
          </span>
        </div>
        <div
          className={`${styles.idWrapper} ${styles.wp}`}
          style={{ marginTop: "20px" }}
        >
          <div className={styles.fx}>
            <div className={`${styles.fx0}`}>
              <span className={styles.pt}>*</span>아이디
            </div>
            <div className={`${styles.fx3}`}>
              <input
                className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                name="id"
                type="text"
                placeholder="아이디를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${styles.pwWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0}`}>
              <span className={styles.pt}>*</span>비밀번호
            </div>
            <div className={`${styles.fx3}`}>
              <input
                className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                name="pw"
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${styles.pwCheckWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0}`}>
              <span className={styles.pt}>*</span>비밀번호 재확인
            </div>
            <div className={`${styles.fx3}`}>
              <input
                className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                name="pwCheck"
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${styles.ageWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0}`}>연령대</div>
            <div className={`${styles.fx3}`}>
              <select
                name="agerange"
                id="age"
                className={`${styles.ddBox} ${styles.defaultStyleNone}`}
              >
                <option value="none" selected>
                  선택
                </option>
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
            <div className={`${styles.fx0}`}>성별</div>
            <div className={`${styles.fx3}`}>
              <select
                name="gender"
                id="gender"
                className={`${styles.ddBox} ${styles.defaultStyleNone}`}
              >
                <option value="none" selected>
                  선택
                </option>
                <option value="female">여자</option>
                <option value="male">남자</option>
                <option value="etcGen">기타</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${styles.emailWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0}`}>이메일</div>
            <div className={`${styles.fx3}`}>
              <input
                type="email"
                placeholder="이메일을 입력하세요."
                className={`${styles.emailBox} ${styles.defaultStyleNone}`}
              />
              <select
                name="emailDomain"
                id="emailDomain"
                className={`${styles.ddBoxEmail} ${styles.defaultStyleNone}`}
              >
                <option value="none" selected>
                  선택
                </option>
                <option value="naver">@naver.com</option>
                <option value="gmail">@gmail.com</option>
                <option value="hanmail">@hanmail.net</option>
                <option value="daum">@daum.net</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profileTitle}>내 프로필</div>
        <div className={styles.profileImg}>
          <img src={profileImage} alt="profile" />
          <img src="img/addImg.png" alt="add image button" className={styles.addImg} onClick={handleClickAddImage}/>
            {fileInputVisible && (
            <input
                type="file"
                id="file-upload"
                className={styles.fileInput}
                onChange={handleImageUpload}
              />
            )}
        </div>
        <div className={`${styles.birthWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0} ${styles.birDate}`}>생년월일</div>
            <div className={`${styles.fx3}`}>
              <input type="date" required placeholder="날짜 선택" />
            </div>
          </div>
        </div>
        <div className={`${styles.starWrapper} ${styles.wp}`}>
          <div className={styles.fx}>
            <div className={`${styles.fx0} ${styles.myStar}`}>내 스타</div>
            <div className={`${styles.fx3}`}>
              <select
                name="star"
                id="star"
                className={`${styles.ddBox} ${styles.defaultStyleNone}`}
              >
                <option value="none" selected>
                  선택
                </option>
                <option value="idol">아이돌</option>
                <option value="singer">가수</option>
                <option value="actor">배우</option>
                <option value="entertainer">예능인</option>
                <option value="athlete">운동선수</option>
                <option value="model">모델</option>
                <option value="2D">2D</option>
                <option value="etcStar">기타</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.completeBtn} onClick={handleComplete}>
        <span className={styles.completeCmt}>프로필 수정 완료</span>
      </div>
    </div>
  );
}

export default ModifyProfile;

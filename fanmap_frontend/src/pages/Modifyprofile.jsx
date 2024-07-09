import React from "react";
import { useNavigate } from "react-router-dom";
import M from "../css/StyledMembership.module.css";

function ModifyProfile() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/main");
  };

  return (
    <div className={M.form}>
      <div className={`${M.join} ${M["join-title"]}`}>
        <div>
          내 정보 수정
          <span className={`${M.pt} ${M.noti}`}>
            *표시는 필수 입력 항목입니다.
          </span>
        </div>
        <div
          className={`${M["id-wrapper"]} ${M.wp}`}
          style={{ marginTop: "20px" }}
        >
          <div className={M.fx}>
            <div className={`${M["fx-1"]}`}>
              <span className={M.pt}>*</span>아이디
            </div>
            <div className={`${M["fx-3"]}`}>
              <input
                className={`${M["input-box"]} ${M["default-style-none"]}`}
                name="id"
                type="text"
                placeholder="아이디를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${M["pw-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-1"]}`}>
              <span className={M.pt}>*</span>비밀번호
            </div>
            <div className={`${M["fx-3"]}`}>
              <input
                className={`${M["input-box"]} ${M["default-style-none"]}`}
                name="pw"
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${M["pw-check-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-1"]}`}>
              <span className={M.pt}>*</span>비밀번호 재확인
            </div>
            <div className={`${M["fx-3"]}`}>
              <input
                className={`${M["input-box"]} ${M["default-style-none"]}`}
                name="pw-check"
                type="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
          </div>
        </div>
        <div className={`${M["age-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-0"]}`}>연령대</div>
            <div className={`${M["fx-3"]}`}>
              <select
                name="agerange"
                id="age"
                className={`${M["dd-box"]} ${M["default-style-none"]}`}
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
        <div className={`${M["gender-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-0"]}`}>성별</div>
            <div className={`${M["fx-3"]}`}>
              <select
                name="gender"
                id="gender"
                className={`${M["dd-box"]} ${M["default-style-none"]}`}
              >
                <option value="none" selected>
                  선택
                </option>
                <option value="female">여자</option>
                <option value="male">남자</option>
                <option value="etc-gen">기타</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${M["email-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-0"]}`}>이메일</div>
            <div className={`${M["fx-3"]}`}>
              <input
                type="email"
                placeholder="이메일을 입력하세요."
                className={`${M["email-box"]} ${M["default-style-none"]}`}
              />
              <select
                name="email-domain"
                id="email-domain"
                className={`${M["dd-email-box"]} ${M["default-style-none"]}`}
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
      <div className={M.profile}>
        <div className={M["profile-title"]}>프로필 설정</div>
        <div className={M["profile-img"]}>
          <img src="img/profile.png" alt="profile" />
        </div>
        <div className={`${M["birth-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-0"]} ${M["bir-date"]}`}>생년월일</div>
            <div className={`${M["fx-3"]}`}>
              <input type="date" required placeholder="날짜 선택" />
            </div>
          </div>
        </div>
        <div className={`${M["star-wrapper"]} ${M.wp}`}>
          <div className={M.fx}>
            <div className={`${M["fx-0"]} ${M["my-star"]}`}>내 스타</div>
            <div className={`${M["fx-3"]}`}>
              <select
                name="star"
                id="star"
                className={`${M["dd-box"]} ${M["default-style-none"]}`}
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
                <option value="etc-star">기타</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className={M["complete-btn"]} onClick={handleComplete}>
        <span className={M["complete-cmt"]}>프로필 수정 완료</span>
      </div>
    </div>
  );
}

export default ModifyProfile;

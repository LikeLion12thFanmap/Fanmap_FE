import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledMembership.module.css";

function Membership() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/main");
  };

  return (
    <div className="container">
      <div className={styles.form}>
        <div className={styles.joinTitle}>
          <div>
            회원가입
            <span className={`${styles.pt} ${styles.notif}`}>
              *표시는 필수 입력 항목입니다.
            </span>
          </div>
          <div
            className={`${styles.idWrapper} ${styles.wp}`}
            style={{ marginTop: "20px" }}
          >
            <div className={styles.fx}>
              <div className={styles.fx1}>
                <span className={styles.pt}>*</span>아이디
              </div>
              <div className={styles.fx3}>
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
              <div className={styles.fx1}>
                <span className={styles.pt}>*</span>비밀번호
              </div>
              <div className={styles.fx3}>
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
              <div className={styles.fx1}>
                <span className={styles.pt}>*</span>비밀번호 재확인
              </div>
              <div className={styles.fx3}>
                <input
                  className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                  name="pw-check"
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                />
              </div>
            </div>
          </div>
          <div className={`${styles.ageWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>연령대</div>
              <div className={styles.fx3}>
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
              <div className={styles.fx0}>성별</div>
              <div className={styles.fx3}>
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
                  <option value="etc-gen">기타</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${styles.emailWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>이메일</div>
              <div className={styles.fx3}>
                <input
                  type="email"
                  placeholder="이메일을 입력하세요."
                  className={`${styles.emailBox} ${styles.defaultStyleNone}`}
                />
                <select
                  name="email-domain"
                  id="email-domain"
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
          <div className={styles.profileTitle}>프로필 설정</div>
          <div className={styles.profileImg}>
            <img src="img/profile.png" alt="profile" />
            <img src="img/addImg.png" alt="add profile img" className={styles.addImg}/>
          </div>
          <div className={`${styles.nicknameWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>닉네임</div>
              <div className={styles.fx3}>
                <input
                  type="text"
                  required
                  placeholder="닉네임을 입력하세요."
                  className={`${styles.defaultStyleNone} ${styles.nicknameBox}`}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.birthWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>생년월일</div>
              <div className={styles.fx3}>
                <input type="date" required placeholder="날짜 선택" />
              </div>
            </div>
          </div>
          <div className={`${styles.starWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>내 스타</div>
              <div className={styles.fx3}>
                <select
                  name="star"
                  id="star"
                  className={`${styles.ddBox} ${styles.defaultStyleNone} ${styles.starBox}`}
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
        <div className={styles.agreementWrapper}>
          <div className={styles.agreementTitle}>이용약관 동의</div>
          <div className={styles.agreement}>
            <input
              type="checkbox"
              value="agreement-personal"
              name="agreement-personal"
            />
            <span className={styles.checkboxIcon}></span>
            <label>개인정보 이용 및 수집에 동의하십니까? (필수)</label>
          </div>
          <div className={styles.agreement}>
            <input
              type="checkbox"
              value="agreement-service"
              name="agreement-service"
            />
            <span className={styles.checkboxIcon}></span>
            <label>서비스 이용 약관에 동의하십니까? (필수)</label>
          </div>
          <div className={styles.agreement}>
            <input
              type="checkbox"
              value="agreement-marketing"
              name="agreement-marketing"
            />
            <span className={styles.checkboxIcon}></span>
            <label>마케팅 및 홍보 알림 수신에 동의하십니까? (선택)</label>
          </div>
        </div>
        <div className={styles.completeBtn} onClick={handleComplete}>
          <span className={styles.completeCmt}>회원가입 완료</span>
        </div>
      </div>
    </div>
  );
}

export default Membership;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "../css/StyledMembership.module.css";

function Membership() {
  const navigate = useNavigate();

  // 입력 상태 관리
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    emailDomain: "none",
    agreementPersonal: false,
    agreementService: false,
    agreementMarketing: false
  });
  // 사용자 ID 상태 관리
  const [userId, setUserId] = useState(null); 

  // 입력 값 변경 처리
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // 회원가입 완료 처리
  const handleComplete = () => {
    if (!formData.username || !formData.password || !formData.passwordConfirm) {
      alert("아이디와 비밀번호는 필수 입력 항목입니다.");
      return;
    }

    // 이메일 입력시 도메인과 합쳐주는 코드
    let email = formData.email;
    if (formData.email && formData.emailDomain !== "none") {
      email = `${formData.email}${formData.emailDomain}`;
    }

    // API 요청 데이터
    const requestData = {
      username: formData.username,
      password: formData.password,
      password_confirm: formData.passwordConfirm,
      email: email
    };

    // 사용자 등록 API 호출
    axios.post("http://127.0.0.1:8000/accounts/register/step1/", requestData)
      .then(response => {
        console.log("Step 1 completed. Proceed to step 2.", response.data);
        const receivedUserId = response.data.userId;

        // 서버에서 부여해준 사용자 아이디 저장
        console.log("Received userId:", receivedUserId);
        setUserId(receivedUserId);

        // setprofile로 이동시 사용자 아이디 값 함께 전달
        navigate("/setprofile", { state: { userId: receivedUserId } });
      })
      .catch(error => {
        console.error("Error while registering:", error);
        alert("회원가입 중 오류가 발생했습니다.");
      });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.navbar}>
          <img src="/img/backBtn.png" alt="back button" className={styles.backBtn} onClick={handleBackClick} />회원가입
        </div>
        <div className={styles.signupTitle}>개인정보를<br />입력해주세요.</div>
        <div>
          <div className={styles.joinTitle}>
            회원가입
            <span className={`${styles.pt} ${styles.notif}`}>*표시는 필수 입력 항목입니다.</span>
          </div>
          <div className={`${styles.idWrapper} ${styles.wp}`} style={{ marginTop: "20px" }}>
            <div className={styles.fx}>
              <div className={styles.fx1}><span className={styles.pt}>*</span>아이디</div>
              <div className={styles.fx3}>
                <input
                  className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                  name="username"
                  type="text"
                  placeholder="아이디를 입력하세요."
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.pwWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx1}><span className={styles.pt}>*</span>비밀번호</div>
              <div className={styles.fx3}>
                <input
                  className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.pwCheckWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx1}><span className={styles.pt}>*</span>비밀번호 재확인</div>
              <div className={styles.fx3}>
                <input
                  className={`${styles.inputBox} ${styles.defaultStyleNone}`}
                  name="passwordConfirm"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요."
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.emailWrapper} ${styles.wp}`}>
            <div className={styles.fx}>
              <div className={styles.fx0}>이메일</div>
              <div className={styles.fx3}>
                <input
                  type="text"
                  placeholder="이메일을 입력하세요."
                  className={`${styles.emailBox} ${styles.defaultStyleNone}`}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <select
                  name="emailDomain"
                  className={`${styles.ddBoxEmail} ${styles.defaultStyleNone}`}
                  value={formData.emailDomain}
                  onChange={handleInputChange}
                >
                  <option value="none">선택</option>
                  <option value="@naver.com">@naver.com</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@hanmail.com">@hanmail.net</option>
                  <option value="@daum.net">@daum.net</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.agreementWrapper}>
            <div className={styles.agreementTitle}>이용약관 동의</div>
            <div className={styles.agreement}>
              <input
                type="checkbox"
                name="agreementPersonal"
                checked={formData.agreementPersonal}
                onChange={handleInputChange}
              />
              <label>개인정보 이용 및 수집에 동의하십니까? (필수)</label>
            </div>
            <div className={styles.agreement}>
              <input
                type="checkbox"
                name="agreementService"
                checked={formData.agreementService}
                onChange={handleInputChange}
              />
              <label>서비스 이용 약관에 동의하십니까? (필수)</label>
            </div>
            <div className={styles.agreement}>
              <input
                type="checkbox"
                name="agreementMarketing"
                checked={formData.agreementMarketing}
                onChange={handleInputChange}
              />
              <label>마케팅 및 홍보 알림 수신에 동의하십니까? (선택)</label>
            </div>
          </div>
          <div className={styles.completeBtn} onClick={handleComplete}>
            <span className={styles.completeCmt}>다음 단계로 이동</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Membership;

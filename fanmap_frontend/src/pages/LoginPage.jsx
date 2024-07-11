import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../css/StyledLoginPage.module.css";

function LoginPage() {
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try { //response에 사용자 정보 저장
      const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        username: username,
        password: password
      });
  
      console.log(response.data); // 서버로부터 받은 데이터 콘솔에 출력
      localStorage.setItem("token",response.data.token); 
      navigate("/main"); // 로그인 성공 후 메인 페이지로 이동
  
    } catch (error) {
      setError("로그인에 실패했습니다.");
  
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div className={styles.container}>
      <img src="img/login_bg.png" alt="bg" />
      <div className={styles.form}>
        <img className={styles.logo} src="/img/logo.png" alt="logo" />
        <div className={styles.logoText}>FANMAP</div>
        <div className={styles.loginWp}>
          <input
            className={styles.loginBox}
            name="username"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className={styles.loginBox}
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.btnWp}>
          <div className={styles.memJoinBtn}>
            <Link to="/membership" style={{ textDecorationLine: "none", color: "#fff" }}>
              회원가입
            </Link>
          </div>
          <div className={styles.loginBtn} onClick={handleLogin}>
            로그인
          </div>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.find}>
          <div className={styles.findId}>
            아이디 찾기<span className={styles.line}>|</span>
          </div>
          <div className={styles.findPw}>비밀번호 찾기</div>
        </div>
        <div className={styles.loginPlatformWp}>
          <div className={styles.loginGoogle}>구글로 로그인</div>
          <div className={styles.loginKakao}>카카오톡으로 로그인</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

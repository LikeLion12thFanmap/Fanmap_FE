import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/StyledLoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <img src="img/login_bg.png" alt="bg" />
      <div className={styles.form}>
        <img className={styles.logo} src="/img/logo.png" alt="logo" />
        <div className={styles.logoText}>FANMAP</div>
        <div className={styles.loginWp}>
          <input
            className={styles.loginBox}
            name="id"
            type="text"
            placeholder="아이디"
          />
          <input
            className={styles.loginBox}
            name="pw"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <Link to="/membership" className={styles.memJoinBtn}>
          회원가입
        </Link>
        <div className={styles.loginBtn}>로그인</div>
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

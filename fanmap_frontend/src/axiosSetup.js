// axiosSetup.js
import axios from 'axios';

// Django는 CSRF 토큰을 필요로 합니다. 이를 위해 Axios에 CSRF 토큰을 설정합니다.
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// 쿠키를 포함하도록 설정
axios.defaults.withCredentials = true;

export default axios;
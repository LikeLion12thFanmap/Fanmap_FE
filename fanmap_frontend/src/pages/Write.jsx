import React from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../css/styledWrite";

const Write = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/community");
  };
  return (
    <W.Container>
      <W.Nav>
        <W.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="goBack"
          />
        </W.BackBtn>
        <W.Title>글 등록하기</W.Title>
        <W.Post>
          <img
            src={`${process.env.PUBLIC_URL}/images/Arrow1.svg`}
            alt="goBack"
          />
        </W.Post>
      </W.Nav>
      <W.Content>
        <input id="inputTitle" placeholder="제목이 들어갑니다." />
        <input type="text" className="mainText" />
        <img
          src={`${process.env.PUBLIC_URL}/images/Rectangle39.png`}
          alt="addimage"
        />
        <W.Box>
          <img
            id="clip"
            src={`${process.env.PUBLIC_URL}/images/clip.svg`}
            alt="clip"
          />
          <p>http://www.fanmap.co.kr</p>
        </W.Box>
        <W.Box2>
          <img
            id="place"
            src={`${process.env.PUBLIC_URL}/images/place.svg`}
            alt="place"
          />
          <p>서울특별시 송파구 올림픽로 25</p>
        </W.Box2>
      </W.Content>
    </W.Container>
  );
};
export default Write;

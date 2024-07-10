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
        <textarea id="inputContent" placeholder="내용이 들어갑니다." />
        <p>아래 미디어 추가할 수 있습니다.</p>
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
          <input placeholder="링크를 추가하시오" />
        </W.Box>
        <W.Box2>
          <img
            id="place"
            src={`${process.env.PUBLIC_URL}/images/place.svg`}
            alt="place"
          />
          <input placeholder="장소를 추가하시오" />
        </W.Box2>
      </W.Content>
    </W.Container>
  );
};
export default Write;

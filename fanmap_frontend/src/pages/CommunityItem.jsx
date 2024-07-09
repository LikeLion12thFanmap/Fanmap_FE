import React, { useState } from "react";

import * as C from "../css/styledCommunity";

const CommunityItem = ({ nickname, username, date, content, img }) => {
  const [isIncrease, setIsIncrease] = useState(true);
  const [count, setCount] = useState(370);
  const [isClicked, setIsClicked] = useState(true);
  const [commentImage, setCommentImage] = useState(
    `${process.env.PUBLIC_URL}/images/goComment2.svg`
  );

  const handleButtonClick = () => {
    if (isIncrease) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIsIncrease(!isIncrease);
  };

  const handleIsClicked = () => {
    if (isClicked) {
      setCommentImage(`${process.env.PUBLIC_URL}/images/goComment.svg`);
    } else {
      setCommentImage(`${process.env.PUBLIC_URL}/images/goComment2.svg`);
    }
    setIsClicked(!isClicked);
  };

  return (
    <C.ListItem>
      <C.Content1>
        <C.C1>
          <img
            src={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            alt=""
          />
        </C.C1>
        <C.C2>{nickname}</C.C2>
        <C.C3>{username}</C.C3>
        <C.C4>{date}</C.C4>
        <C.C5>
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </C.C5>
        <C.C6>
          <img src={img} alt="" />
        </C.C6>
        <C.C7>
          <button onClick={handleButtonClick}>
            <img src={`${process.env.PUBLIC_URL}/images/Star.svg`} alt="Star" />
          </button>
          {count}
          <img
            id="chatIcon"
            src={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            alt="chatIcon"
          />
          10
          <button onClick={handleIsClicked}>
            <img id="goComment" src={commentImage} alt="goComment" />
          </button>
        </C.C7>
        <C.C8>
          <button onClick={handleButtonClick}>
            <img
              id="addMylist"
              src={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
              alt="addMylist"
            />
            <C.C82>
              <img
                id="Star3"
                src={`${process.env.PUBLIC_URL}/images/Star3.svg`}
                alt="Star3"
              />
              <span>내 리스트 추가</span>
            </C.C82>
          </button>
        </C.C8>
      </C.Content1>
    </C.ListItem>
  );
};

export default CommunityItem;

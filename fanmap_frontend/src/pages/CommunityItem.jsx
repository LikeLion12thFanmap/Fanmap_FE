import React, { useState } from "react";
import * as C from "../css/styledCommunity";

import React, { useState } from "react";
import * as C from "./CommunityItemStyles";

const CommunityItem = ({ nickname, username, date, content, img }) => {
  const [isIncrease, setIsIncrease] = useState(true); // 카운트 증가/감소 여부 상태
  const [count, setCount] = useState(370); // 초기 카운트 값
  const [isClicked, setIsClicked] = useState(true); // 댓글 아이콘 클릭 여부 상태
  const [commentImage, setCommentImage] = useState(
    `${process.env.PUBLIC_URL}/images/goComment2.svg`
  ); // 댓글 아이콘 이미지 경로 상태

  // 별 아이콘 클릭 핸들러 함수
  const handleButtonClick = () => {
    if (isIncrease) {
      setCount(count + 1); // 카운트 증가
    } else {
      setCount(count - 1); // 카운트 감소
    }
    setIsIncrease(!isIncrease); // 증가/감소 토글
  };

  // 댓글 아이콘 클릭 핸들러 함수
  const handleIsClicked = () => {
    if (isClicked) {
      setCommentImage(`${process.env.PUBLIC_URL}/images/goComment.svg`); // 댓글 아이콘 클릭 시 이미지 변경
    } else {
      setCommentImage(`${process.env.PUBLIC_URL}/images/goComment2.svg`); // 댓글 아이콘 클릭 해제 시 이미지 변경
    }
    setIsClicked(!isClicked); // 클릭 여부 토글
  };

  return (
    <C.ListItem>
      <C.Content1>
        <C.C1>
          <img
            src={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            alt="" // 프로필 이미지 출력
          />
        </C.C1>
        <C.C2>{nickname}</C.C2> {/* 닉네임 출력 */}
        <C.C3>{username}</C.C3> {/* 사용자명 출력 */}
        <C.C4>{date}</C.C4> {/* 날짜 출력 */}
        <C.C5>
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br /> {/* 컨텐츠 출력 (줄바꿈 처리) */}
            </React.Fragment>
          ))}
        </C.C5>
        <C.C6>
          <img src={img} alt="" /> {/* 이미지 출력 */}
        </C.C6>
        <C.C7>
          <button onClick={handleButtonClick}>
            <img src={`${process.env.PUBLIC_URL}/images/Star.svg`} alt="Star" />
          </button>
          {count} {/* 카운트 출력 */}
          <img
            id="chatIcon"
            src={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            alt="chatIcon" // 채팅 아이콘 출력
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
              alt="addMylist" // 내 리스트 추가 아이콘 출력
            />
            <C.C82>
              <img
                id="Star3"
                src={`${process.env.PUBLIC_URL}/images/Star3.svg`}
                alt="Star3" // 별 아이콘 출력
              />
              <span>내 리스트 추가</span> {/* 내 리스트 추가 텍스트 */}
            </C.C82>
          </button>
        </C.C8>
      </C.Content1>
    </C.ListItem>
  );
};

export default CommunityItem;

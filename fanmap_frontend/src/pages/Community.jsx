import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../css/styledCommunity";
import CommunityItem from "./CommunityItem";

const Community = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/main");
  };

  const goWrite = () => {
    navigate("/write");
  };

  return (
    <C.Container>
      <C.Nav>
        <C.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="goBack"
          />
        </C.BackBtn>
        <C.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/commuIcon_w.svg`}
            alt="community"
          />
          커뮤니티
        </C.Title>
        <C.Write onClick={goWrite}>
          <img
            src={`${process.env.PUBLIC_URL}/images/penLiner.svg`}
            alt="penliner"
          />
        </C.Write>
      </C.Nav>
      <C.Content>
        <C.StyledList>
          <CommunityItem
            nickname="nickname1"
            username="@aakw1234"
            date="2024.04.13"
            content={`5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, 
            선착10분에게는 키링도 드립니다!! 
            자세한 정보는 인포 이미지 참고해주세요~!!! 
            맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...`}
            img={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
          />
          <CommunityItem
            nickname="nickname2"
            username="@aakw1234"
            date="2024.04.13"
            content={`5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, 
            선착10분에게는 키링도 드립니다!! 
            자세한 정보는 인포 이미지 참고해주세요~!!! 
            맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...`}
            img={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
          />
          <CommunityItem
            nickname="nickname3"
            username="@aakw1234"
            date="2024.04.13"
            content={`5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, 
            선착10분에게는 키링도 드립니다!! 
            자세한 정보는 인포 이미지 참고해주세요~!!! 
            맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...`}
            img={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
          />
        </C.StyledList>
      </C.Content>
    </C.Container>
  );
};

export default Community;

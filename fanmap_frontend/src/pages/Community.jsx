import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../css/styledCommunity";
import CommunityItem from "./CommunityItem";
import axios from "axios";
import { useState, useEffect } from "react";

const Community = () => {
  const navigate = useNavigate();
  {
    /*community 연동*/
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("Menu clicked");
    setIsMenuOpen(true);
  };

  const handleListClick = () => {
    console.log("List clicked");
    navigate("/placelist");
  };

  const handleCommunityClick = () => {
    console.log("Community clicked");
    navigate("/community");
  };

  const handleMainClick = () => {
    console.log("Main clicked");
    navigate("/main");
  };
  const [ListItems, setItemsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/community");
        setItemsList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const goBack = () => {
    navigate("/main");
  };

  const goWrite = () => {
    navigate("/write");
  };

  return (
    <C.Container>
      {/*페이지 상단 nav바*/}
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
          {/*컴포넌트 이용 CommunityItem*/}
          {ListItems.map((e) => (
            <CommunityItem
              key={e.id}
              img={e.image}
              nickname={e.nickname}
              username={e.userid}
              date={e.created_at}
              content={e.content}
              starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
              chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
              addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
            />
          ))}
          <CommunityItem
            profileImage={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            nickname="nickname1"
            username="@aakw1234"
            date="2024.04.13"
            content={`5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, 
            선착10분에게는 키링도 드립니다!! 
            자세한 정보는 인포 이미지 참고해주세요~!!! 
            맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...`}
            img={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
            coNickname="nickname2"
            coUsername="@hello2"
            coImg={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            coContent={"댓글입니다"}
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
      <C.Wrapper>
        <C.Menu>
          <img src="/img/menu.png" alt="menu" onClick={handleMenuClick} />
        </C.Menu>
        <C.Community>
          <img
            src="/img/community.png"
            alt="community"
            onClick={handleCommunityClick}
          />
        </C.Community>
        <C.Main onClick={handleMainClick}>
          <C.MainLogo>
            <img src="/img/main.png" alt="main" />
          </C.MainLogo>
        </C.Main>
        <C.List onClick={handleListClick}>
          <img src="/img/list.png" alt="list" />
        </C.List>
      </C.Wrapper>
    </C.Container>
  );
};

export default Community;

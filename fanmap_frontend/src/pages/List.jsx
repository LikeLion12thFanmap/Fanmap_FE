import React from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import * as L from "../css/styledList";

const List = () => {
  const navigate = useNavigate();
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

  const goBack = () => {
    navigate("/");
  };
  {
    /*list연동*/
  }
  const [ListItems, setItemsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/community");
        console.log(response.data);
        setItemsList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <L.Container>
      {/*상단nav바*/}
      <L.Nav>
        <L.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="뒤로가기"
          />
        </L.BackBtn>
        <L.Title>
          <img
            id="myList"
            src={`${process.env.PUBLIC_URL}/images/star2.svg`}
            alt="내 리스트"
          />
          내 리스트
        </L.Title>
        <L.Edit>편집</L.Edit>
      </L.Nav>

      <L.Content>
        <L.StyledList>
          {/* 각 리스트 아이템 컴포넌트 이용*/}
          {ListItems.map((e) => (
            <ListItem
              key={e.id}
              postId={e.id}
              img={e.image}
              nickname={e.nickname}
              username={e.userid}
              date={e.created_at}
              content={e.content}
              link={e.link}
              starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
              chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
              addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
            />
          ))}
          {/* 리스트 아이템 1 */}
          <ListItem
            profileImage={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            nickname="nickname"
            username="@aakw1234"
            date="2024.04.13"
            content={
              <div>
                5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, <br />
                선착10분에게는 키링도 드립니다!! <br />
                자세한 정보는 인포 이미지 참고해주세요~!!! <br />
                맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...
              </div>
            }
            starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
            chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
          />

          {/* 리스트 아이템 2 */}
          <ListItem
            profileImage={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            nickname="nickname"
            username="@aakw1234"
            date="2024.04.13"
            content={
              <div>
                5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, <br />
                선착10분에게는 키링도 드립니다!! <br />
                자세한 정보는 인포 이미지 참고해주세요~!!! <br />
                맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...
              </div>
            }
            img={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
            starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
            chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
          />

          {/* 리스트 아이템 3 */}
          <ListItem
            profileImage={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            nickname="nickname"
            username="@aakw1234"
            date="2024.04.13"
            content={
              <div>
                5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, <br />
                선착10분에게는 키링도 드립니다!! <br />
                자세한 정보는 인포 이미지 참고해주세요~!!! <br />
                맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...
              </div>
            }
            starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
            chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
          />
          <ListItem
            profileImage={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
            nickname="nickname"
            username="@aakw1234"
            date="2024.04.13"
            content={
              <div>
                5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~, <br />
                선착10분에게는 키링도 드립니다!! <br />
                자세한 정보는 인포 이미지 참고해주세요~!!! <br />
                맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...
              </div>
            }
            starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
            chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
            addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
          />
        </L.StyledList>
      </L.Content>
      <L.Wrapper>
        <L.Menu>
          <img src="/img/menu.png" alt="menu" onClick={handleMenuClick} />
        </L.Menu>
        <L.Community>
          <img
            src="/img/community.png"
            alt="community"
            onClick={handleCommunityClick}
          />
        </L.Community>
        <L.Main onClick={handleMainClick}>
          <L.MainLogo>
            <img src="/img/main.png" alt="main" />
          </L.MainLogo>
        </L.Main>
        <L.List onClick={handleListClick}>
          <img src="/img/list.png" alt="list" />
        </L.List>
      </L.Wrapper>
    </L.Container>
  );
};

export default List;

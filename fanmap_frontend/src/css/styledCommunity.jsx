import { styled } from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 849px;
  background: #402846;
`;
export const BackBtn = styled.div`
  color: #fff;
  padding-left: 30px;
  padding-top: 15px;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 390px;
  height: 51px;
  flex-shrink: 0;
  background: linear-gradient(96deg, #402846 54.12%, #e42a89 96.19%);
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  img {
    margin-right: 10px;
  }
`;
export const Write = styled.div`
  color: #fff;
  padding: 10px;
  padding-right: 30px;
  padding-top: 15px;
`;
export const Content = styled.div`
  width: 350px;
  height: 750px;
  padding: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content1 = styled.div`
  flex: 1;
  width: 343px;
  border-radius: 15px;
  background: #fff;
  position: relative;
  padding-left: 55px;
  padding-top: 40px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
export const C1 = styled.div`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 34px;
  position: absolute;
  top: 11px;
  left: 12px;
`;
export const C2 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  top: 15px;
  left: 56px;
`;
export const C3 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  position: absolute;
  top: 25px;
  left: 56px;
`;
export const C4 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  position: absolute;
  top: 16px;
  right: 15px;
`;
export const C5 = styled.div`
  color: #000;
  font-family: "SUIT Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const C6 = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const C7 = styled.div`
  color: var(--main1, #1d1d1d);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-right: 5px;
  }

  #chatIcon {
    margin-left: 10px;
    margin-right: 5px;
  }
  #goComment {
    margin-left: 10px;
  }
`;
export const C8 = styled.div`
  z-index: 0;
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 0;
    flex-shrink: 0;
  }
`;
export const C82 = styled.div`
  position: absolute;
  bottom: 9px;
  right: 5px;
  width: 80px;
  z-index: 1;

  span {
    color: #fff;
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 20px;
    padding-bottom: 5px;
  }

  #Star3 {
    position: absolute;
    bottom: 0;
    left: 5px;
  }
`;
export const Content2 = styled.div`
  flex: 1;
  width: 343px;
  border-radius: 15px;
  background: #fff;
  position: relative;
  padding-left: 55px;
  padding-top: 40px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
export const Content3 = styled.div`
  flex: 1;
  width: 343px;
  border-radius: 15px;
  background: #fff;
  position: relative;
  padding-left: 55px;
  padding-top: 40px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const StyledList = styled.div`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Comment = styled.div`
  margin-top: 20px;
  position: relative;
  padding-left: 40px;
  padding-top: 3px;
`;
export const CommentImg = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 24px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const CommmentNickname = styled.div`
  color: var(--main1, #1d1d1d);
  font-family: "SUIT Variable";
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const CommentUsername = styled.div`
  color: var(--main1, #1d1d1d);
  font-family: "SUIT Variable";
  font-size: 8px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;
export const CommentName = styled.div`
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  gap: 5px;
  padding-bottom: 2px;
`;
export const CommentContent = styled.div`
  color: var(--main1, #1d1d1d);
  font-family: "SUIT Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const AddCommentProfile = styled.div``;
export const AddComment = styled.div``;
export const Wrapper = styled.div`
  position: fixed;
  left: 28px;
  bottom: 20px; /* Adjust this value as needed */
  width: 344px;
  height: 69px;
  border-radius: 40px;
  background: #402846;
  right: 15px;
  z-index: 2;
`;

export const Menu = styled.div`
  float: left;
  position: relative;
  top: 12px;
  left: 35px;
  margin-right: 30px;
  cursor: pointer;

  img {
    color: white;
  }

  img:active {
    color: white;
  }

  img:visited {
    color: white;
  }

  img:hover {
    color: lightgrey;
  }
`;

export const Community = styled.div`
  float: left;
  position: relative;
  top: 12px;
  left: 35px;
  margin-right: 30px;
  cursor: pointer;

  img {
    color: white;
  }

  img:active {
    color: white;
  }

  img:visited {
    color: white;
  }

  img:hover {
    color: lightgrey;
  }
`;

export const Main = styled.div`
  position: relative;
  top: 6px;
  right: 3px;
  cursor: pointer;

  img {
    color: white;
  }

  img:active {
    color: white;
  }

  img:visited {
    color: white;
  }

  img:hover {
    color: lightgrey;
  }
`;

export const MainLogo = styled.div`
  float: left;
  position: relative;
  left: 44px;
  top: 6px;
  cursor: pointer;

  img {
    color: white;
  }

  img:active {
    color: white;
  }

  img:visited {
    color: white;
  }

  img:hover {
    color: lightgrey;
  }
`;

export const List = styled.div`
  float: left;
  position: relative;
  left: 75px;
  top: 11px;
  cursor: pointer;

  img {
    color: white;
  }

  img:active {
    color: white;
  }

  img:visited {
    color: white;
  }

  img:hover {
    color: lightgrey;
  }
`;

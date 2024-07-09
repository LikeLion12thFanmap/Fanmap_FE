import { styled } from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 100vh;
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
  height: 7vh;
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

export const Edit = styled.div`
  color: #fff;
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 10px;
  padding-right: 30px;

  padding-top: 15px;
`;
export const Content = styled.div`
  width: 350px;
  height: 93vh;
  padding: 23px;
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
  padding-bottom: 10px;
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

  botton {
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
    padding: 0;
  }
  #star {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  #goComment {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
  }
`;
export const C8 = styled.div`
  z-index: 0;
  #addMylist {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    bottom: 10px;
    right: 15px;

    flex-shrink: 0;
  }
  #edit1 {
    
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    bottom: -1px;
    right: 85px;
    
  }
  #edit1background{
    z-index:1;
  }
  #edit1img{
    
    position: absolute;
    bottom: 20px;
    right: 18px;
    
    z-index:2;
  }
  #edit1img2{
    
    position: absolute;
    bottom: 20px;
    right: 9px;
    
    z-index:2;
  }
  #edit2 {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    bottom: 29px;
    right: 55px;
  }
  #edit2background{
    z-index:1;
  }
  #edit2img{
    
    position: absolute;
    bottom: 20px;
    right: 12px;
    
    z-index:2;
  }
  #edit3 {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    bottom: -36px;
      right: 55px;
      z-index: 1;
    }
    #edit3background{
      z-index:1;
    }
    #edit3img{
      
      position: absolute;
      bottom: 20px;
      right: 11px;
      
      z-index:2;
    }
  }
`;
export const C82 = styled.div`
  position: absolute;
  bottom: 9px;
  right: 15px;
  .container {
    position: relative;
  }

  #popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 10px;
    border: 0;
    z-index: 1000;
    border-radius: 20px;

    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
    max-width: 300px;
    max-height: 151px;
    color: #000;
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  #copybtn {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  #popup-content {
    text-align: center;
  }
  .copy-text {
    position: absolute;
    bottom: 30px;
    left: 115px;
    color: #fff;

    font-family: "SUIT Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .copy-message {
    color: var(--point1, #e42a89);
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #aaa;
  }

  #close:hover {
    color: black;
  }
  #popup2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 10px;
    border: 0;
    z-index: 1000;
    border-radius: 20px;

    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
    max-width: 300px;
    max-height: 151px;
    color: var(--main1, #1d1d1d);
    text-align: center;
    font-family: "SUIT Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  #deletebtn {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
  #popup-content2 {
    text-align: center;
  }
  .delete-text {
    position: absolute;
    bottom: 30px;
    left: 115px;
    color: #fff;

    font-family: "SUIT Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #close2 {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #aaa;
  }

  #close2:hover {
    color: black;
  }
`;
export const C81 = styled.div`
  position: absolute;
  bottom: 10px;
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

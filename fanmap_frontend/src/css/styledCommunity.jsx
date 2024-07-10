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
    bottom: 10px;
    right: 15px;

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

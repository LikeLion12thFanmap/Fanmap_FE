import { styled } from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 100vh;

  background: #fff;
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

  background: #402846;
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

export const Post = styled.div`
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
  align-items: center;
  gap: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  #inputTitle {
    color: var(--main1, #1d1d1d);
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
  }

  & > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const Box = styled.div`
  display: inline-flex;
  padding: 1px 162px 1px 20px;

  border-radius: 5px;
  background: #dbcfde;
  color: #402846;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  #clip {
    margin-right: 5px;
  }
`;
export const Box2 = styled.div`
  display: inline-flex;
  padding: 1px 123px 1px 20px;
  align-items: center;

  border-radius: 5px;
  background: #dbcfde;
  color: var(--main2, #402846);

  /* 본문 */
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  #place {
    margin-right: 5px;
  }
`;

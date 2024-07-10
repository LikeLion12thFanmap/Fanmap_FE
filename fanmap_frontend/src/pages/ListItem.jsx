import React, { useState } from "react";
import * as L from "../css/styledList";
import ModalDelete from "./ModalDel";
import ModalCopy from "./ModalCopy";

const ListItem = ({
  profileImage,
  nickname,
  username,
  date,
  content,
  img,
  starImage,
  chatIcon,
  addMylistImage,
  editVisible: initialEditVisible,
}) => {
  const [count, setCount] = useState(371);
  const [isIncrease, setIsIncrease] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
  const [commentImage, setCommentImage] = useState(
    `${process.env.PUBLIC_URL}/images/goComment2.svg`
  );
  const [isItClicked, setIsItClicked] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [delmodal, setDelModal] = useState(false);
  const [copymodal, setCopyModal] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText("링크 복사 내용"); // 실제 클립보드에 복사하는 코드

    setCopyMessage(
      <p>
        복사 완료!
        <br />
        이제 링크를 붙여넣어
        <br />
        글을 공유해보세요.
      </p>
    );
    setTimeout(() => {
      setShowPopup(false);
      setCopyMessage("");
    }, 1000);
  };
  const handleClick2 = () => {
    setShowPopup2(true); // 팝업 표시
  };
  const handleDelete = () => {
    setTimeout(() => {
      setShowPopup2(false);
      setDeleteMessage("");
    });
  };

  const closePopup2 = () => {
    setShowPopup2(false); // 팝업 닫기
  };
  const handleButtonClick = () => {
    if (isIncrease) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
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

  const addAllItems = () => {
    setIsItClicked(!isItClicked);
    setEditVisible(!editVisible);
  };

  return (
    <L.ListItem>
      <L.Content1>
        <L.C1>
          <img src={profileImage} alt="" />
        </L.C1>
        <L.C2>{nickname}</L.C2>
        <L.C3>{username}</L.C3>
        <L.C4>{date}</L.C4>
        <L.C5>{content}</L.C5>
        <L.C6>{img && <img src={img} alt="images" />}</L.C6>
        <L.C7>
          <button onClick={handleButtonClick} id="star">
            <img src={starImage} alt="Star" />
          </button>
          {count}
          <img id="chatIcon" src={chatIcon} alt="chatIcon" />
          10
          <button onClick={handleIsClicked} id="goComment">
            <img src={commentImage} alt="goComment" />
          </button>
        </L.C7>
        <L.C8>
          <button onClick={addAllItems} id="addMylist">
            <img src={addMylistImage} alt="addMylist" />
            <L.C81>
              <img
                id="Star3"
                src={`${process.env.PUBLIC_URL}/images/Star3.svg`}
                alt="Star3"
              />
              <span>내 리스트 관리</span>
            </L.C81>
          </button>
          <L.C82>
            {editVisible && (
              <>
                <button id="edit1">
                  <img
                    id="edit1background"
                    src={`${process.env.PUBLIC_URL}/images/Ellipse16.svg`}
                    alt="edit1"
                  />
                  <img
                    id="edit1img"
                    src={`${process.env.PUBLIC_URL}/images/Vector1.svg`}
                    alt="edit1img"
                  />
                  <img
                    id="edit1img2"
                    src={`${process.env.PUBLIC_URL}/images/Vector2.svg`}
                    alt="edit1img2"
                  />
                  <p id="edit1p">순서 변경</p>
                </button>

                <button id="edit2" onClick={() => setCopyModal(true)}>
                  <img
                    id="edit2background"
                    src={`${process.env.PUBLIC_URL}/images/Ellipse16.svg`}
                    alt="edit2"
                  />
                  <img
                    id="edit2img"
                    src={`${process.env.PUBLIC_URL}/images/Vector.svg`}
                    alt="edit2img"
                  />
                  <p id="edit2p">공유</p>
                </button>

                {/* proprs로 post도 전달 */}
                {copymodal ? <ModalCopy isClose={setCopyModal} /> : null}

                <button id="edit3" onClick={() => setDelModal(true)}>
                  <img
                    id="edit3background"
                    src={`${process.env.PUBLIC_URL}/images/Ellipse16.svg`}
                    alt="edit3"
                  />
                  <img
                    id="edit3img"
                    src={`${process.env.PUBLIC_URL}/images/delete.svg`}
                    alt="edit3img"
                  />
                  <p id="edit3p">삭제</p>
                </button>

                {/* proprs로 post도 전달 */}
                {delmodal ? <ModalDelete isClose={setDelModal} /> : null}
              </>
            )}
          </L.C82>
        </L.C8>
      </L.Content1>
    </L.ListItem>
  );
};

export default ListItem;

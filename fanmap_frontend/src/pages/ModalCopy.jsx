import React, { useState } from "react";
import * as L from "../css/styledList";

const ModalCopy = (props) => {
  const { isClose } = props; // post 추가
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("링크 복사 내용"); // Replace with actual content to copy

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
      isClose(false); // Close the modal after timeout
      setCopyMessage("");
    }, 1000); // Correct usage: setTimeout takes a function as the first argument
  };

  return (
    <L.CopyBtnContent>
      {!copyMessage && (
        <div id="popup-content">
          <span
            id="close"
            onClick={() => {
              isClose(false);
            }}
          >
            &times;
          </span>

          <p>
            해당 글의 링크를 복사해
            <br /> 외부로 공유할 수 있습니다.
          </p>
          <button id="copybtn" onClick={handleCopy}>
            <img
              id="copy"
              src={`${process.env.PUBLIC_URL}/images/Rectangle1.svg`}
              alt="copy"
            />
            <span className="copy-text">복사하기</span>
          </button>
        </div>
      )}
      {copyMessage && <p className="copy-message">{copyMessage}</p>}
    </L.CopyBtnContent>
  );
};

export default ModalCopy;

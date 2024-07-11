import React, { useState } from "react";
import * as L from "../css/styledList";

const ModalCopy = (props) => {
  const { isClose } = props;
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("링크 복사 내용"); //링크 복사, 1분 뒤 복사완료 창 닫힘

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
      isClose(false);
      setCopyMessage("");
    }, 1000);
  };

  return (
    <L.CopyBtnContent>
      {/* 복사 메시지가 없는 경우에만 팝업 내용을 표시 */}
      {!copyMessage && (
        <div id="popup-content">
          {/* 팝업 닫기 버튼 */}
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

          {/* 복사하기 버튼 */}
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

      {/* 복사 메시지가 있는 경우에는 복사 완료 메시지를 표시 */}
      {copyMessage && <p className="copy-message">{copyMessage}</p>}
    </L.CopyBtnContent>
  );
};

export default ModalCopy;

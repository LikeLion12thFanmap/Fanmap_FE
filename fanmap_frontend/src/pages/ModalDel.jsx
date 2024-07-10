import React from "react";
import * as L from "../css/styledList";

const ModalDelete = (props) => {
  const { isClose } = props; // post 추가

  return (
    <L.DeleteBtnContent>
      <div id="popup-content2">
        <span
          id="close2"
          onClick={() => {
            isClose(false);
          }}
        >
          &times;
        </span>

        <p>
          선택한 글을 리스트에서
          <br />
          삭제하시겠습니까?
        </p>
        <button
          id="deletebtn"
          onClick={() => {
            isClose(false);
          }}
        >
          <img
            id="delete"
            src={`${process.env.PUBLIC_URL}/images/Rectangle1.svg`}
            alt="delete"
          />
          <span className="delete-text">삭제하기</span>
        </button>
      </div>
    </L.DeleteBtnContent>
  );
};

export default ModalDelete;

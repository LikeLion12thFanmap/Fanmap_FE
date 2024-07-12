import React from "react";
import * as L from "../css/styledList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModalDelete = (props) => {
  const isClose = props.isClose;
  const id = props.id;
  console.log("idid:", id);

  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/community/${id}`)
      .then(() => {
        console.log("삭제 성공");
        isClose(false);
        window.location.reload();
        navigate("/list");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <L.DeleteBtnContent>
      <div id="popup-content2">
        {/* 팝업 닫기 버튼 */}
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
        {/* 삭제하기 버튼 */}
        <button id="deletebtn" onClick={handleDelete}>
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

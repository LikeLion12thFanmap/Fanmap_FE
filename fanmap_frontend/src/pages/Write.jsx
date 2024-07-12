import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as W from "../css/styledWrite";

const Write = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    location: "",
    link: "",
    image: "",
    video: "",
  });

  const { title, content, location, link, image, video } = inputs;
  const token = localStorage.getItem("token");

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" || name === "video") {
      setInputs({
        ...inputs,
        [name]: files[0],
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleSaveBtn = async () => {
    console.log("제목: ", title);
    console.log("내용: ", content);
    console.log("장소: ", location);
    console.log("링크: ", link);
    console.log("이미지:", image);
    console.log("비디오:", video);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("location", location);
      formData.append("link", link);
      formData.append("image", image); // 이미지 파일 추가

      await axios.post("http://127.0.0.1:8000/community", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });
      navigate(`/community`);
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  const goBack = () => {
    navigate("/community");
  };

  return (
    <W.Container>
      <W.Nav>
        <W.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="goBack"
          />
        </W.BackBtn>
        <W.Title>글 등록하기</W.Title>
        <W.Post onClick={handleSaveBtn}>
          <img
            src={`${process.env.PUBLIC_URL}/images/Arrow1.svg`}
            alt="글 등록"
          />
        </W.Post>
      </W.Nav>
      <W.Content>
        <form onSubmit={handleSaveBtn}>
          <input
            id="inputTitle"
            placeholder="제목이 들어갑니다."
            value={title}
            onChange={onChange}
            name="title"
            required
          />
          <textarea
            id="inputContent"
            placeholder="내용이 들어갑니다."
            value={content}
            onChange={onChange}
            name="content"
            required
          />
          <p>아래 미디어 추가할 수 있습니다.</p>
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            name="image"
          />
          <input
            type="file"
            accept="video/*"
            onChange={onChange}
            name="video"
          />
          <W.Box>
            <img
              id="clip"
              src={`${process.env.PUBLIC_URL}/images/clip.svg`}
              alt="clip"
            />
            <input
              placeholder="링크를 추가하시오"
              value={link}
              onChange={onChange}
              name="link"
            />
          </W.Box>
          <W.Box2>
            <img
              id="place"
              src={`${process.env.PUBLIC_URL}/images/place.svg`}
              alt="place"
            />
            <input
              placeholder="장소를 추가하시오"
              value={location}
              onChange={onChange}
              name="location"
            />
          </W.Box2>
        </form>
      </W.Content>
    </W.Container>
  );
};

export default Write;

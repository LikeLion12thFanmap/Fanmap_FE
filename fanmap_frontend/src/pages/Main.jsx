import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import N from "../css/StyledMain.module.css";
import Menu from "./Menu"; 

function Main() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleMenuClick = () => {
    console.log("Menu clicked");
    setIsMenuOpen(true); 
  };

  const handleListClick = () => {
    console.log("List clicked");
    navigate("/placelist");
  };

  const handleCommunityClick = () => {
    console.log("Community clicked");
    navigate("/community");
  };

  const handleMainClick = () => {
    console.log("Main clicked");
    navigate("/main");
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={N.container}>
      <img
        src="/img/main_bg.png"
        alt="bg"
        className={N.bg}
        onClick={handleMenuClick}
      />
      <input
        type="text"
        className={N.searchbar}
        placeholder="검색어를 입력하세요"
      />
      <div className={N.lens}></div>

      <div className={N["btn-wrapper"]}>
        <div className={N.menu}>
          <img src="/img/menu.png" alt="menu" onClick={handleMenuClick} />
        </div>
        <div className={N.community}>
          <img
            src="/img/community.png"
            alt="community"
            onClick={handleCommunityClick}
          />
        </div>
        <div className={N.main} onClick={handleMainClick}>
          <img src="/img/main.png" alt="main" className={N.mainlogo} />
        </div>
        <div className={N.list} onClick={handleListClick}>
          <img src="/img/list.png" alt="list" />
        </div>
      </div>

      {isMenuOpen && <Menu onClose={handleCloseMenu} />} 
    </div>
  );
}

export default Main;

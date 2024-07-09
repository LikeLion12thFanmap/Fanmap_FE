import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Membership from "./pages/Membership";
import Main from "./pages/Main";
import MainDetail from "./pages/MainDetail";
import Menu from "./pages/Menu";
import PlaceList from "./pages/PlaceList";
import AddPlace from "./pages/AddPlace";
import List from "./pages/List";
import Community from "./pages/Community";
import Write from "./pages/Write";
import ModifyProfile from "./pages/Modifyprofile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/main" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/placelist" element={<PlaceList />} />
        <Route path="/maindetail" element={<MainDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addplace" element={<AddPlace />} />
        <Route path="/list" element={<List />} />
        <Route path="/community" element={<Community />} />
        <Route path="/write" element={<Write />} />
        <Route path="/modifyprofile" element={<ModifyProfile />} />
      </Routes>
    </Router>
  );
}
export default App;

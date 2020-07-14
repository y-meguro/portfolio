import React from "react";

import "../assets/styles/main.css"
import profile from '../assets/images/profile.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="profile">
        <img src={profile} alt="" />
      </div>
    </header>
  );
};

export default Header
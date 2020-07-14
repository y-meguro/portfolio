import React from "react";

import profile from '../assets/images/profile.jpg'

const Header = () => {
  return (
    <header>
      <div className="profile">
        <img src={profile} alt="" />
      </div>
    </header>
  );
};

export default Header
import React from "react";

import "../assets/styles/main.css"
import profile from '../assets/images/profile.jpg'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={profile} alt="" />
        <h1>Yohei Meguro</h1>
        <h2>Software Engineer</h2>
        <ul>
          <li>
            <a href="https://twitter.com/yohei_meguro" className="icon" target="_blank">
              <span area-hidden="true" className="fa fa-twitter"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/y-meguro" className="icon" target="_blank">
              <span area-hidden="true" className="fa fa-github"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yoheimeguro/" className="icon" target="_blank">
              <span area-hidden="true" className="fa fa-linkedin"></span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
          <li>
            <a href="https://blog.ymeguro.com/" target="_blank">Blog</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header
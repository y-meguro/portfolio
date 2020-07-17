import React from "react";

import profile from '../assets/images/profile.jpg'

const Header = () => {
  return (
    <header className="header text-center">
      <div className="navbar">
        <div className="profile-section">
          <img className="profile-image rounded-circle" src={profile} alt="profile" />
          <h1 className="name">Yohei Meguro</h1>
          <h2 className="title">Software Engineer</h2>
          <ul className="social-icons list-inline">
            <li className="list-inline-item">
              <a href="https://twitter.com/yohei_meguro" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-twitter"></span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/y-meguro" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-github"></span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/yoheimeguro/" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="page-section">
          <ul className="pages">
            <li>
              <a href="/" className="page">About</a>
            </li>
            <li>
              <a href="/" className="page">Resume</a>
            </li>
            <li>
              <a href="https://blog.ymeguro.com/" target="_blank" className="page" rel="noopener noreferrer">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header
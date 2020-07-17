import React from "react";
import profile from '../assets/images/profile.jpg'
import "../assets/scss/navbar.scss"

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__section">
          <img className="navbar__profile" src={profile} alt="profile" />
          <h1 className="navbar__name">Yohei Meguro</h1>
          <h2 className="navbar__title">Software Engineer</h2>
          <ul className="navbar__social-icons">
            <li className="navbar__social-icon">
              <a href="https://twitter.com/yohei_meguro" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-twitter"></span>
              </a>
            </li>
            <li className="navbar__social-icon">
              <a href="https://github.com/y-meguro" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-github"></span>
              </a>
            </li>
            <li className="navbar__social-icon">
              <a href="https://www.linkedin.com/in/yoheimeguro/" target="_blank" rel="noopener noreferrer">
                <span area-hidden="true" className="fa fa-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__section">
          <h2 className="navbar__contact-title">CONTACT</h2>
          <ul className="navbar__contents">
            <li>
              <div>y.meguro.2008@gmail.com</div>
            </li>
          </ul>
        </div>
        <div className="navbar__section">
          <h2 className="navbar__link-title">LINKS</h2>
          <ul className="navbar__contents">
            <li>
              <a href="https://blog.ymeguro.com/" target="_blank" className="navbar__link" rel="noopener noreferrer">Blog</a>
            </li>
            <li>
              <a href="https://qiita.com/y-meguro" target="_blank" className="navbar__link" rel="noopener noreferrer">Qiita</a>
            </li>
            <li>
              <a href="https://speakerdeck.com/meguro0217" className="navbar__link" rel="noopener noreferrer">Speaker Deck</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header
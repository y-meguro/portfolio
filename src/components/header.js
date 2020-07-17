import React from "react";
import config from '../../config';
import profile from '../assets/images/profile.jpg';
import "../assets/scss/navbar.scss";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__section">
          <img className="navbar__profile" src={profile} alt="profile" />
          <h1 className="navbar__name">{config.author}</h1>
          <h2 className="navbar__job">{config.job}</h2>
          <ul className="navbar__social-icons">
            {config.socialLinks.map(social => {
              const { name, url, icon } = social;
              return (
                <li key={name} className="navbar__social-icon">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span area-hidden="true" className={`fa ${icon}`}></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__section">
          <h2 className="navbar__contact-title">CONTACT</h2>
          <ul className="navbar__contents">
            <li>
              <div>{config.email}</div>
            </li>
          </ul>
        </div>
        <div className="navbar__section">
          <h2 className="navbar__link-title">LINKS</h2>
          <ul className="navbar__contents">
            {config.links.map(link => {
              const { name, url } = link;
              return (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header
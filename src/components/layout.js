import React from "react";
import Header from "./header";
import config from '../../config';
import "../assets/scss/main.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header
        socialLinks={config.socialLinks}
        links={config.links}
      />
      {children}
    </div>
  );
};

export default Layout;
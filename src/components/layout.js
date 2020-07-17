import React from "react";
import Header from "./header";
import "../assets/scss/main.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
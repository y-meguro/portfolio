import React from "react";

import Header from "./header"
import "../assets/styles/main.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
import React from "react";

import Header from "./header"
import "../assets/scss/main.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
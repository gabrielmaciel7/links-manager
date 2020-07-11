import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container">
          <div>
            <NavLink to="/manage/links">Back</NavLink>
          </div>
          <div>
            <strong>Links</strong>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

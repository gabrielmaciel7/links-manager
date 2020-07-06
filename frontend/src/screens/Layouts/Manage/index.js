import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container">
          <div>
            <span>Back</span>
          </div>
          <div>
            <strong>Links</strong>
          </div>
          <div>
            <span>Exit</span>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

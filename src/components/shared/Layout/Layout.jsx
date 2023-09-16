import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
    </>
  );
}

export default Layout;

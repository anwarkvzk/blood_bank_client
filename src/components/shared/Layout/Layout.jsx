import React from "react";
import Header from "./Header";
import Sidebar from "./Menus/Sidebar";

function Layout({ children }) {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar/>
        </div>
      </div>
      <div className="col-md-9">{children}</div>
    </>
  );
}

export default Layout;

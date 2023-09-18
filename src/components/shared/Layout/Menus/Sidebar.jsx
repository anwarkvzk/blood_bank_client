import React from "react";
import { userMenu } from "./userMenu";
import { useLocation, Link } from "react-router-dom";
import "../../../../styles/Layout.css";

function Sidebar() {
  const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div className={`menu-item  ${isActive && "active"} `} key={menu.name}>
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;

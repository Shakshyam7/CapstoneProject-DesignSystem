import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ sidebarItems }) {
  return (
    <>
      <div className="sidebarContainer">
        <ul className="sidebarUl">
          {sidebarItems.map((item, index) => (
            <li className="sidebarItem" key={index}>
              <Link to={item} className = "sidebarLink">{item}</Link> 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

import React from "react";
import "./Sidebar.css";

function Sidebar({ sidebarItems }) {
  return (
    <>
      <div className="sidebarContainer">
        <ul className="sidebarUl">
          {sidebarItems.map((item, index) => (
            <li className="sidebarItem" key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

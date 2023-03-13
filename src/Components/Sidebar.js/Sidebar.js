import React from "react";
import "./Sidebar.css";

function Sidebar({ sidebarItems }) {
  return (
    <>
      <div className="sidebarContaniner">
        <ul className="sidebarUl">
          {sidebarItems.map((item, index) => (
            <li className="sidebarItem" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

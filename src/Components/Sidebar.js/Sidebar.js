import React from "react";
import "./Sidebar.css";

function Sidebar({ sidebarItems }) {
  return (
    <>
      <div className="sidebarContainer">
        <ul className="sidebarUl">
          {sidebarItems.map((item, index) => (
            <a href={`#${item.toLowerCase()}`} className="sidebarLink">
              <li className="sidebarItem" key={index}>
                {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

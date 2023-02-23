import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="#home">Home</a>
          </li>
          <li className="sidebar-item">
            <a href="#services">Services</a>
          </li>
          <li className="sidebar-item">
            <a class="active" href="#news">
              News
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#blog">Blog</a>
          </li>
          <li className="sidebar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

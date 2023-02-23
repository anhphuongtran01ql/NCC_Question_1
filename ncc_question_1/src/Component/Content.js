import React from "react";
import "./content.css";
import logoNCC from "../Assets/logoNCC.png";
import cssIcon from "../Assets/css-icon.png";
import htmlIcon from "../Assets/html-icon.png";
import urlIcon from "../Assets/url-icon.png";

function Content() {
  return (
    <>
      <div className="content-container">
        <div className="logo-container">
          <img src={logoNCC} className="logo" alt="logo" />
        </div>
        <div className="content">
          <div className="content-group">
            <h3 className="content-title">Lorem ipsum dolor sit asmet?</h3>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className="card-group">
            <div class="card">
              <h3 className="card-title">Lorem ipsum dolor sit amet</h3>
              <img src={cssIcon} className="logo-card" alt="css-icon" />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
            <div class="card">
              <h3 className="card-title">Lorem ipsum dolor sit amet</h3>
              <img src={htmlIcon} className="logo-card" alt="html-icon" />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
            <div class="card">
              <h3 className="card-title">Lorem ipsum dolor sit amet</h3>
              <img src={urlIcon} className="logo-card" alt="url-icon" />
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

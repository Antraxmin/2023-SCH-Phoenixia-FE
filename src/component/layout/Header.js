import React from "react";
import { useState } from "react";
import "./Header.css";
import SideDrawer from "../category/SideDrawer";

export default function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  return (
    <>
      {drawerIsOpen ? <SideDrawer /> : null}
      <header className="header">
        <div className="header-contents">
          <div className="header-sidebar-btn">
            <img src="./img/app_bar.svg" alt="" onClick={openDrawer} />
          </div>
        </div>
      </header>
    </>
  );
}

/*
return (
    <header id="header">
      <div className="row1">
        <div className="container">
          <div className="left">
            <a href="!#" title="카테고리" className="category">
              <img src="./img/app_bar.svg" alt="" />
            </a>
            <div className="menu">
              <ul>
                <li>
                  <a href="!#">
                    <img
                      src="./img/close-btn.png"
                      alt=""
                      className="close-btn"
                    />
                  </a>
                </li>
                <li>
                  <img src="./img/free-icon-moon-867904.png" alt="" />
                </li>
                <li>
                  <a href="!#">공연시간표</a>
                </li>
                <li>
                  <a href="!#">푸드트럭</a>
                </li>
                <li>
                  <a href="!#">동아리</a>
                </li>
                <li>
                  <a href="!#">축제지도</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );


*/

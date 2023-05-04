import React, { useState } from "react";
import style from "./SideDrawer.module.css";
import { Link } from "react-router-dom";

export default function SideDrawer() {
  const [sideIsOpen, setSideIsOpen] = useState(true);
  return (
    <>
      {sideIsOpen && (
        <div className={style.side_drawer}>
          <div className={style.btn_box}>
            <img
              src="../../img/close-btn.png"
              width={20}
              onClick={() => {
                setSideIsOpen(!sideIsOpen);
              }}
            />
          </div>
          <div className={style.list_box}>
            <ul>
              <li>공연 시간표</li>
              <li>푸드트럭</li>
              <li>동아리 부스</li>
              <li>
                <Link to="/map">축제 지도</Link>
              </li>
              <li id={style.about}>About us</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

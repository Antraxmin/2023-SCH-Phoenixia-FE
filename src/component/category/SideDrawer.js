import React, { useState } from "react";
import style from "./SideDrawer.module.css";

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
              <li>공연시간표</li>
              <li>푸드트럭</li>
              <li>동아리 부스</li>
              <li>축제 지도</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
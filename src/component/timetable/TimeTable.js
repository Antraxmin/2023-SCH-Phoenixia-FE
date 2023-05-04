import React from "react";
import style from "./TimeTable.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";

export default function TimeTable() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <>
      {drawerIsOpen == true ? <SideDrawer /> : null}
      <div className={style.container}>
        <header className={style.header}>
          <img
            src="./img/app_bar_dark.png"
            alt=""
            width={18}
            onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }}
          />
          <p>공연 시간표</p>
        </header>
      </div>
    </>
  );
}

import React from "react";
import style from "./TimeTable.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import TimeTableNav from "./TimeTableNav";

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
        <main>
          <div className={style.date}>
            <TimeTableNav />
          </div>
          <div className={style.table}>
            <img src="./img/timetable/day1.png" />
          </div>
        </main>
      </div>
    </>
  );
}

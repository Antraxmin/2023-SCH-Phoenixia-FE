import React from "react";
import style from "./DayContent.module.css";
import HalfMoonDay from "./HalfMoonDay";
import FullMoonDay from "./FullMoonDay";
import NewMoonDay from "./NewMoonDay";

export default function DayContent() {
  return (
    <div>
      <ul className={style.dayListBox}>
        <li className={style.dayListItem}>
          <NewMoonDay />
        </li>
        <li className={style.dayListItem}>
          <HalfMoonDay />
        </li>
        <li className={style.dayListItem}>
          <FullMoonDay />
        </li>
      </ul>
      <div className={style.selectBtn}>
        <div className={style.btn1}>
          <button type="button">Day 1</button>
        </div>
        <div className={style.btn2}>
          <button type="button">Day 2</button>
        </div>
        <div className={style.btn3}>
          <button type="button">Day 3</button>
        </div>
      </div>
    </div>
  );
}

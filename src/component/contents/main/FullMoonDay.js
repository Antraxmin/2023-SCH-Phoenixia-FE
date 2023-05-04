import React from "react";
import style from "./DayContent.module.css";

export default function FullMoonDay() {
  return (
    <>
      <div className={style.day_info_box}>
        <div className={style.moon}>
          <div className={style.moon_img}>
            <img src="../img/full_moon.png" width={35} />
          </div>
        </div>
        <div className={style.text}>Full Moon Day</div>
        <img className={style.artist} src="../img/day3_artist.png" />
      </div>
    </>
  );
}

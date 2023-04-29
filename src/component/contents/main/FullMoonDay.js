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
        <div className={style.artist}>3일차 아티스트</div>
      </div>
    </>
  );
}

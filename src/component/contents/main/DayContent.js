import React, { useState } from "react";
import style from "./DayContent.module.css";
import HalfMoonDay from "./HalfMoonDay";
import FullMoonDay from "./FullMoonDay";
import NewMoonDay from "./NewMoonDay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DayContent() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div className={style.carousel}>
      <Slider {...settings}>
        <div className={style.day_info_box}>
          <NewMoonDay />
        </div>
        <div className={style.day_info_box}>
          <HalfMoonDay />
        </div>
        <div className={style.day_info_box}>
          <FullMoonDay />
        </div>
      </Slider>
    </div>
  );
}

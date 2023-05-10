import React from "react";
import Slider from "react-slick";
import event1 from "../../img/banner/event1.png";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={event1} width="100%" />
        </div>
      </Slider>
    </div>
  );
}

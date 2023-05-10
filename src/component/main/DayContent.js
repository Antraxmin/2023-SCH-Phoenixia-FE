import React from "react";
import HalfMoonDay from "./HalfMoonDay";
import FullMoonDay from "./FullMoonDay";
import NewMoonDay from "./NewMoonDay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Banner from "./Banner";

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
    <>
      <Carousel>
        <Slider {...settings}>
          <DayInfoBox>
            <NewMoonDay />
          </DayInfoBox>
          <DayInfoBox>
            <HalfMoonDay />
          </DayInfoBox>
          <DayInfoBox>
            <FullMoonDay />
          </DayInfoBox>
        </Slider>
      </Carousel>
    </>
  );
}

const Carousel = styled.div`
  width: 100%;
  max-width: 390px;
  height: 80vh;
`;

const DayInfoBox = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  width: 267px;
  border-radius: 10px;
  margin: 0 0 auto;
`;

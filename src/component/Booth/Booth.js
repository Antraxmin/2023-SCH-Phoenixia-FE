import React from "react";
import style from "./Booth.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import { BoothListBox } from "./BoothListBox";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";

export default function Booth() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const booth_data = [
    {
      name: "Festival People",
      theme: "#부스",
      image: "./img/booth/fepe.JPG",
    },
    {
      name: "유니브팅",
      theme: "#부스",
      image: "./img/booth/univting.JPG",
    },
    {
      name: "REAL",
      theme: "#공연",
      image: "./img/booth/real.JPG",
    },
    {
      name: "키릿",
      theme: "#부스",
      image: "./img/booth/kilit.JPG",
    },
    {
      name: "CLOSER",
      theme: "#공연",
      image: "./img/booth/closer.JPG",
    },
    {
      name: "UNTITLE",
      theme: "#공연",
      image: "./img/booth/untitle.JPG",
    },
  ];
  return (
    <>
      {drawerIsOpen == true ? <SideDrawer /> : null}
      <div className={style.container}>
        <header className={style.header}>
          <AppbarImg
            onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }}
          />
          <p>동아리/부스</p>
        </header>
        <main>
          <div className={style.booth_list}>
            {booth_data.map((booth) => (
              <BoothListBox booth={booth} key={booth.id} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const AppbarImg = styled.img.attrs({
  src: `${appbar}`,
})`
  width: 18px;
  cursor: pointer;
`;

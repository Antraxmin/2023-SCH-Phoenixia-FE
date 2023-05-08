import React from "react";
import style from "./About.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";
import aboutImage from "../../img/common/about.png";

export default function About() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
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
          <p>About us</p>
        </header>
        <main>
          <AboutImg />
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

const AboutImg = styled.img.attrs({
  src: `${aboutImage}`,
})`
  width: 100%;
  cursor: pointer;
`;

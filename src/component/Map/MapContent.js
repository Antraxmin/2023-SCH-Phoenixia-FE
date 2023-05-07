import React from "react";
import style from "./MapContent.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import MapSection from "./MapSection";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";

export default function MapContent() {
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
          <p>축제 지도</p>
        </header>
        <main className={style.main}>
          <MapSection />
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

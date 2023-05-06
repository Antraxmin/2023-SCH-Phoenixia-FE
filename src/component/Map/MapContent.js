import React from "react";
import style from "./MapContent.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import MapSection from "./MapSection";

export default function MapContent() {
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
          <p>축제 지도</p>
        </header>
        <main className={style.main}>
          <MapSection />
        </main>
      </div>
    </>
  );
}

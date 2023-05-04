import React from "react";
import style from "./About.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";

export default function About() {
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
          <p>About us</p>
        </header>
      </div>
    </>
  );
}

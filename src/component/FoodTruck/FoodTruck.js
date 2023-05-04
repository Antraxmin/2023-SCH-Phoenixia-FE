import React from "react";
import style from "./FoodTruck.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";

export default function FoodTruck() {
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
          <p>푸드트럭</p>
        </header>
        {/* <main>
        <div className={style.booth}>푸드트럭</div>
      </main> */}
      </div>
    </>
  );
}

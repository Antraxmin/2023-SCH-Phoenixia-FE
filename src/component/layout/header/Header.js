import React from "react";
import { useState } from "react";
import style from "./Header.module.css";
import SideDrawer from "../../category/SideDrawer";

export default function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      {drawerIsOpen == true ? <SideDrawer /> : null}
      <header className={style.header}>
        <div className={style.header_content}>
          <div
            className={style.header_sidebar_btn}
            onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }}
          >
            <img src="./img/app_bar_light.png" alt="" width={18} />
          </div>
        </div>
      </header>
    </>
  );
}

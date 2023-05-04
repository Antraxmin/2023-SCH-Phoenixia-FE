import React from "react";
import style from "./MainContent.module.css";
import DayContent from "./DayContent";
import Header from "../../layout/header/Header";

export default function MainContent() {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <Header />
          <DayContent />
          <div className={style.logo}>
            <div>
              <p>ⓒ 2023 LikeLion 11th x FePe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

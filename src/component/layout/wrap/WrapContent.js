import React from "react";
import Header from "../header/Header";
import style from "./Wrap.module.css";
import MainContent from "../../contents/main/MainContent";

export default function WrapContent() {
  return (
    <div className={style.wrap}>
      <Header />
      <main>
        <MainContent />
      </main>
    </div>
  );
}

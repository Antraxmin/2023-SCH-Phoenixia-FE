import React from "react";
import style from "./FoodTruck.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import FoodTruckListBox from "./FoodTruckListBox";

export default function FoodTruck() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const food_data = [
    {
      name: "꼬꼬닭꼬치",
      description:
        "안녕하세요. 꼬꼬닭꼬치입니다. 저희는 데리야끼 닭꼬치가 주력메뉴입니다.",
      image: "./img/koko.jpg",
    },
    {
      name: "인생타코",
      description: "멕시코가 그대로! 인생타코입니다",
      image: "./img/taco.jpg",
    },
    {
      name: "청년스테이크",
      description:
        "청년스테이크입니다. 저희는 청정호주산 소고기만 사용하여 아주 맛있습니다",
      image: "./img/stake.jpg",
    },
    {
      name: "하와이 드링크",
      description: "축제에는 시원한 음료가 빠지면 섭섭하죠!",
      image: "./img/hawaii.jpg",
    },
    {
      name: "맨해튼버거",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/burger.jpg",
    },
    {
      name: "버거",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/koko.jpg",
    },
    {
      name: "감자",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/hawaii.jpg",
    },
  ];
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
        <main>
          <div className={style.foodtruck_list}>
            {food_data.map((food) => (
              <FoodTruckListBox food={food} key={food.id} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

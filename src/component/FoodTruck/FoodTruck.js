import React from "react";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import FoodTruckListBox from "./FoodTruckListBox";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";

export default function FoodTruck() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const food_data = [
    {
      name: "꼬꼬닭꼬치",
      description:
        "안녕하세요. 꼬꼬닭꼬치입니다. 저희는 데리야끼 닭꼬치가 주력메뉴입니다.",
      image: "./img/koko.JPG",
    },
    {
      name: "인생타코",
      description: "멕시코가 그대로! 인생타코입니다",
      image: "./img/taco.JPG",
    },
    {
      name: "청년스테이크",
      description:
        "청년스테이크입니다. 저희는 청정호주산 소고기만 사용하여 아주 맛있습니다",
      image: "./img/stake.JPG",
    },
    {
      name: "하와이 드링크",
      description: "축제에는 시원한 음료가 빠지면 섭섭하죠!",
      image: "./img/hawaii.JPG",
    },
    {
      name: "맨해튼버거",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/burger.JPG",
    },
    {
      name: "버거",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/koko.JPG",
    },
    {
      name: "감자",
      description:
        "뉴욕 맨해튼에서 먹던 맛 그대로. 정통 미국식 수제버거 푸드트럭입니다",
      image: "./img/hawaii.JPG",
    },
  ];
  return (
    <>
      {drawerIsOpen == true ? <SideDrawer /> : null}
      <Container>
        <Header>
          <AppbarImg
            onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }}
          />
          <HeaderTitle>푸드트럭</HeaderTitle>
        </Header>
        <Main>
          <FoodtruckList>
            {food_data.map((food) => (
              <FoodTruckListBox food={food} key={food.id} />
            ))}
          </FoodtruckList>
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: white;
`;

const Header = styled.header`
  width: 100%;
  max-width: 390px;
  padding-left: 20px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  padding-left: 30px;
  font-size: 20px;
  font-family: "GongGothicMedium";
  padding-top: 5px;
`;

const AppbarImg = styled.img.attrs({
  src: `${appbar}`,
})`
  width: 18px;
  cursor: pointer;
`;

const Main = styled.main`
  overflow: hidden;
  height: 100vh;
`;

const FoodtruckList = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

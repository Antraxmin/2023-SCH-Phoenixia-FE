import React from "react";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import FoodTruckListBox from "./FoodTruckListBox";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

export default function FoodTruck() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFoodData = async () => {
    try {
      setFoods(null);
      setLoading(true);
      setError(null);
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/foodtruck`
      );
      setFoods(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFoodData();
  }, []);

  if (!foods) return console.log("로딩중입니다");

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
            {foods.map((food) => (
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

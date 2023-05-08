import React from "react";
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
      <Container>
        <Header>
          <AppbarImg
            onClick={() => {
              setDrawerIsOpen(!drawerIsOpen);
            }}
          />
          <HeaderTitle>축제 지도</HeaderTitle>
        </Header>
        <Main>
          <MapSection />
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 390px;
  margin: 0 auto;
  background-color: white;
  overflow-y: hidden;
`;

const Header = styled.header`
  width: 100%;
  max-width: 390px;
  padding-left: 20px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.header`
  padding-left: 30px;
  font-size: 20px;
  font-family: "NanumSquareNeo-Variable";
  padding-top: 5px;
`;

const AppbarImg = styled.img.attrs({
  src: `${appbar}`,
})`
  width: 18px;
  cursor: pointer;
`;

const Main = styled.main`
  height: 100%;
`;

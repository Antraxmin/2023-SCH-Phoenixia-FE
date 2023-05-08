import React from "react";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";
import aboutImage from "../../img/common/about.png";

export default function About() {
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
          <HeaderTitle>About us</HeaderTitle>
        </Header>
        <main>
          <AboutImg />
        </main>
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
`;

const Header = styled.div`
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

const AboutImg = styled.img.attrs({
  src: `${aboutImage}`,
})`
  width: 100%;
`;

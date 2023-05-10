import styled from "styled-components";
import React from "react";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import appbar from "../../img/common/app_bar_dark.png";
import "./Notice.css";
import NoticeContent from "./NoticeContent";
import titleimage from "../../img/notice/title.png";

export default function Notice() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [foods, setFoods] = useState(null);
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
          <HeaderTitle></HeaderTitle>
        </Header>
        <Main>
          <div className="TitleArea">
            <TitleImage src={titleimage} />
          </div>
          <div className="NoticeArea">
            <NoticeContent />
          </div>
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
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const HeaderTitle = styled.div`
  padding-left: 30px;
  font-size: 20px;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
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
  height: 100vh;
  overflow-y: scroll;
`;

const TitleImage = styled.img`
  width: 100%;
`;

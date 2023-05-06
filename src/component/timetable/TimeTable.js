import React from "react";
import style from "./TimeTable.module.css";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import TimeTableNav from "./TimeTableNav";
import firstdayimage from "../../img/timetable/day1.png";
import seconddayimage from "../../img/timetable/day2.png";
import thirddayimage from "../../img/timetable/day3.png";
import styled from "styled-components";
import appbar from "../../img/common/app_bar_dark.png";

export default function TimeTable() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [image, setImage] = useState(FirstDayImg);

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
          <HeaderTitle>공연 시간표</HeaderTitle>
        </Header>
        <main>
          <DateContainer>
            <TimeTableNav setImage={setImage} />
          </DateContainer>
          <TableContainer>
            <FirstDayImg />
          </TableContainer>
        </main>
      </Container>
    </>
  );
}

const Container = style.div`
  width: 100%;
  height: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: white;
  overflow-y: scroll;
`;

const Header = styled.div`
  width: 100%;
  max-width: 390px;
  padding-left: 20px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const AppbarImg = styled.img.attrs({
  src: `${appbar}`,
})`
  width: 18px;
`;

const HeaderTitle = styled.p`
  padding-left: 30px;
  font-size: 20px;
  font-family: "GongGothicMedium";
  padding-top: 5px;
`;

const DateContainer = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  margin-top: 10px;
  height: 100vh;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`;

const FirstDayImg = styled.img.attrs({
  src: `${firstdayimage}`,
})`
  width: 100%;
  border-radius: 15px;
`;

const SecondDayImg = styled.img.attrs({
  src: `${seconddayimage}`,
})`
  width: 100%;
  border-radius: 15px;
`;

const ThirdDayImg = styled.img.attrs({
  src: `${thirddayimage}`,
})`
  width: 100%;
  border-radius: 15px;
`;

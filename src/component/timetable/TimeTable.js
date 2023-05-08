import React from "react";
import { useState } from "react";
import SideDrawer from "../category/SideDrawer";
import firstdayimage from "../../img/timetable/day1.png";
import seconddayimage from "../../img/timetable/day2.png";
import thirddayimage from "../../img/timetable/day3.png";
import styled from "styled-components";
import appbar from "../../img/common/app_bar_dark.png";

export default function TimeTable() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [image, setImage] = useState(firstdayimage);

  const setFirstDayImage = () => {
    setImage(firstdayimage);
  };

  const setSecondDayImage = () => {
    setImage(seconddayimage);
  };

  const setThirdDayImage = () => {
    setImage(thirddayimage);
  };

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
        <MainContent>
          <DateContainer>
            <ItemBox>
              <Today
                onClick={() => {
                  setImage(setFirstDayImage);
                }}
              >
                <Date>9일</Date>
                <Day>화요일</Day>
              </Today>

              <Today
                onClick={() => {
                  setImage(setSecondDayImage);
                }}
              >
                <Date>10일</Date>
                <Day>수요일</Day>
              </Today>
              <Today
                onClick={() => {
                  setImage(setThirdDayImage);
                }}
              >
                <Date>11일</Date>
                <Day>목요일</Day>
              </Today>
            </ItemBox>
          </DateContainer>
          <TableContainer>
            <TableImg src={image} />
          </TableContainer>
        </MainContent>
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

const AppbarImg = styled.img.attrs({
  src: `${appbar}`,
})`
  width: 18px;
  cursor: pointer;
`;

const HeaderTitle = styled.p`
  padding-left: 30px;
  font-size: 20px;
  font-family: "GongGothicMedium";
  padding-top: 5px;
`;

const MainContent = styled.main`
  //overflow-y: scroll;
`;

const DateContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
`;

const ItemBox = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Today = styled.div`
  border-bottom: 3px solid #888888;
  margin: 7px;
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  font-family: "GongGothicMedium";
  color: #888888;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000066;
    cursor: pointer;
    border-bottom: 3px solid #000066;
  }
`;

const Date = styled.div`
  font-size: 22px;
  display: inline-block;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
`;

const Day = styled.div`
  font-size: 13px;
`;

const TableContainer = styled.div`
  margin-top: 10px;
  height: 100vh;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`;

const TableImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

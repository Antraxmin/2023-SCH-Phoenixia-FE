import React from "react";
import { useState, useEffect } from "react";
import SideDrawer from "../category/SideDrawer";
import { BoothListBox } from "./BoothListBox";
import appbar from "../../img/common/app_bar_dark.png";
import styled from "styled-components";
import axios from "axios";

export default function Booth() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const [booths, setBooths] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBoothData = async () => {
    try {
      setBooths(null);
      setLoading(true);
      setError(null);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/club`);
      setBooths(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBoothData();
  }, []);

  if (!booths) return console.log("로딩중입니다");

  const booth_data = [
    {
      name: "Festival People",
      theme: "#부스",
      image: "./img/booth/fepe.JPG",
    },
    {
      name: "유니브팅",
      theme: "#부스",
      image: "./img/booth/univting.JPG",
    },
    {
      name: "REAL",
      theme: "#공연",
      image: "./img/booth/real.JPG",
    },
    {
      name: "키릿",
      theme: "#부스",
      image: "./img/booth/kilit.JPG",
    },
    {
      name: "CLOSER",
      theme: "#공연",
      image: "./img/booth/closer.JPG",
    },
    {
      name: "UNTITLE",
      theme: "#공연",
      image: "./img/booth/untitle.JPG",
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
          <HeaderTitle>동아리/부스</HeaderTitle>
        </Header>
        <Main>
          <BoothList>
            {booths.map((booth) => (
              <BoothListBox booth={booth} key={booth.id} />
            ))}
          </BoothList>
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
  height: 100%;
`;

const BoothList = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

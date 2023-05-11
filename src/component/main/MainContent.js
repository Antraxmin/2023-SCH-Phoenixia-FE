import React, { useEffect } from "react";
import DayContent from "./DayContent";
import Header from "../layout/header/Header";
import styled from "styled-components";
import Banner from "./Banner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MainContent() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Main>
          <Header />
          <DayContent />
        </Main>
        <ButtonArea>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzsa42DeLrTeXoUWzXRyaqzj9AGyXaXIIaxcAs0BkAb1VRiQ/viewform"
            target="_blank"
          >
            <Button variant="primary">설문에 참여하고 경품 받자!</Button>
          </a>
        </ButtonArea>

        <Banner />
        <Logo>
          <div>
            <p>ⓒ 2023 LikeLion 11th x FePe</p>
          </div>
        </Logo>
      </Container>
    </>
  );
}

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-family: "S-CoreDream-3Light";
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 390px;
  margin: 0 auto;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.div`
  width: 100%;
  height: 10vh;
  font-family: "S-CoreDream-3Light";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

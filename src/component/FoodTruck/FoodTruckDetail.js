import { useParams } from "react-router-dom";
import backBtn from "../../img/common/back_btn.png";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function FoodTruckDetail() {
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/foodtruck/${id}`)
      .then((res) => {
        setFood(res.data.foodtruck);
        console.log(res);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Header>
          <BackBtn />
        </Header>
        <main>{id}번째 부스입니다</main>
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

const BackBtn = styled.img.attrs({
  src: `${backBtn}`,
})`
  width: 10px;
  cursor: pointer;
`;

import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FoodTruckDetail from "./FoodTruckDetail";

export default function FoodTruckListBox({ food }) {
  return (
    <>
      <Link to={`/foodtruck/${food.truck_id}`}>
        <Container>
          <Content>
            <FoodtruckImg src={food.imageUrl} />
            <Info>
              <Title>{food.name}</Title>
              <Description>{food.description}</Description>
            </Info>
          </Content>
        </Container>
      </Link>
    </>
  );
}

const Container = styled.div`
  padding: 10px;
  height: 110px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  font-family: "NanumSquareNeo-Variable";
  //font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const FoodtruckImg = styled.img`
  width: 90px;
  margin-right: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 16px;
  margin-bottom: 5px;
  font-family: "NanumSquareNeo-Variable";
  font-weight: bold;
`;

const Description = styled.div`
  padding: 5px;
  font-size: 11px;
  color: #777777;
`;

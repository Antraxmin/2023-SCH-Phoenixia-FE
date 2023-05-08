import { useParams, Link } from "react-router-dom";
import backBtn from "../../img/common/back_btn.png";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function FoodTruckDetail() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/foodtruck/${id}`)
      .then((res) => {
        setImage(res.data.imageUrl);
        setName(res.data.name);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Header>
          <Link to="/foodtruck">
            <BackBtn />
          </Link>
        </Header>
        <main>
          <ImageArea>
            <img src={image} width={100} />
          </ImageArea>
          <TitleArea>{name}</TitleArea>
          <MenuArea>
            <MenuList />
            <MenuList />
            <MenuList />
          </MenuArea>
        </main>
      </Container>
    </>
  );
}

export function MenuList() {
  return (
    <>
      <MenuListBox>dkdkdk</MenuListBox>
    </>
  );
}

const MenuListBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: yellow;
  margin-bottom: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const BackBtn = styled.img.attrs({
  src: `${backBtn}`,
})`
  width: 10px;
  cursor: pointer;
`;

const ImageArea = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;

const TitleArea = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  padding: 10px;
  font-family: "GongGothicMedium";
  font-size: 20px;
  margin-top: 8px;
`;

const MenuArea = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
  margin-top: 8px;
  font-family: "Pretendard-Bold";
`;

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
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/foodtruck/${id}`)
      .then((res) => {
        setImage(res.data.imageUrl);
        setName(res.data.name);
        console.log(res.data.menus);
        setMenu(res.data.menus);
        console.log(menu);
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
        <Main>
          <ImageArea>
            <img src={image} width="100%" />
          </ImageArea>
          <TitleArea>{name}</TitleArea>
          <MenuArea>
            {menu ? menu.map((e) => <MenuList menu={e} />) : null}
          </MenuArea>
        </Main>
      </Container>
    </>
  );
}

export function MenuList({ menu }) {
  return (
    <>
      <MenuListBox>
        <MenuItem>
          <Title>{menu.name}</Title>
          <Price>{menu.price}</Price>
        </MenuItem>
        <MenuImageArea>
          <MenuImg src={menu.imageUrl} />
        </MenuImageArea>
      </MenuListBox>
    </>
  );
}

const Main = styled.main`
  background-color: #eeeeee;
`;
const MenuImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 7px;
`;

const Price = styled.div`
  width: 100%;
  font-size: 11px;
  font-family: "S-CoreDream-3Light";
  //font-weight: bold;
  padding-bottom: 8px;
  color: #999999;
`;

const Title = styled.div`
  width: 100%;
  font-size: 15px;
  padding-top: 8px;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
`;

const MenuImageArea = styled.div`
  width: 100px;
  height: 80px;
  //border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //border: 1px solid black;
`;

const MenuListBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  display: flex;
`;

const TitleArea = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: white;
`;

const MenuArea = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
  margin-top: 5px;
  font-family: "Pretendard-Bold";
  background-color: white;
`;

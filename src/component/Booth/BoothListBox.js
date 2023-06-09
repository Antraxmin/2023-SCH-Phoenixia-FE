import { useState } from "react";
import styled from "styled-components";
import upper from "../../img/common/upper_arrow.png";

export function BoothListBox({ booth }) {
  const [isclicked, setisClicked] = useState(false);
  return (
    <>
      <Container>
        <BoothContent
          onClick={() => {
            console.log(booth.name);
            setisClicked(!isclicked);
          }}
        >
          <Content>
            <BoothImage src={booth.imageUrl}></BoothImage>
            <Info>
              <Title>{booth.name}</Title>
              <Theme>{booth.category}</Theme>
            </Info>
          </Content>
        </BoothContent>
        {isclicked ? (
          <Modal>
            <div>{booth.description}</div>
            <ImageArea
              onClick={() => {
                setisClicked(false);
              }}
            >
              <UpperImg src={upper} />
            </ImageArea>
          </Modal>
        ) : null}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modal = styled.div`
  padding: 15px;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  justify-content: space-between;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
  line-height: 22px;
  font-size: 12px;
`;

const BoothContent = styled.div`
  padding: 10px;
  height: 110px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const BoothImage = styled.img`
  width: 80px;
  margin-right: 20px;
  margin-left: 10px;
  border-radius: 10px;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
`;

const Theme = styled.div`
  border: 1px solid black;
  padding: 5px;
  font-size: 13px;
  color: #777777;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  padding: 5px 10px 5px 10px;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;

  // &:hover {
  //   color: #000066;
  // }
`;

const UpperImg = styled.img`
  width: 18px;
  &:hover {
    cursor: pointer;
    //background-color: white;
    color: white;
  }
  margin-left: 25px;
`;

const ImageArea = styled.div`
  border-radius: 10px;
`;

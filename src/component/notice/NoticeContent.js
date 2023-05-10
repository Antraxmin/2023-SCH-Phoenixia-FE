import styled from "styled-components";
import data from "../../data/data.json";
import notice1 from "../../img/notice/1.PNG";
import notice2 from "../../img/notice/2.PNG";
import notice3 from "../../img/notice/3.PNG";
import downarrow from "../../img/notice/down_arrow.png";
import { useState } from "react";

export default function NoticeContent() {
  return (
    <>
      <NoticeList>
        <NoticeItem notice="공연 입장 및 팔찌 배부 안내" image={notice1} />
        <NoticeItem notice="푸드존 및 테이블 이용 안내" image={notice2} />
      </NoticeList>
    </>
  );
}

export function NoticeItem({ notice, image }) {
  const [isclicked, setisClicked] = useState(false);
  return (
    <>
      <NoticeItemBox
        onClick={() => {
          setisClicked(!isclicked);
          console.log("클릭됨");
        }}
      >
        <Title>
          {notice}
          <DownImage src={downarrow} />
        </Title>
        {isclicked ? (
          <Modal>
            <Image src={image} />
          </Modal>
        ) : null}
      </NoticeItemBox>
    </>
  );
}

const NoticeList = styled.div`
  width: 100%;
  //border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NoticeItemBox = styled.div`
  width: 100%;
  //background-color: green;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
`;

const Title = styled.div`
  background-color: white;
  width: 90%;
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
  padding: 10px;
  //border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  //border-radius: 5px;
  margin-left: 17px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  //   &:hover {
  //     background-color: #eeeeee;
  //   }
`;

const Modal = styled.div`
  //background-color: lightgray;
  width: 92%;
  margin: 0 auto;
  padding-right: 6px;
  // margin-top: 3px;
`;

const Image = styled.img`
  width: 100%;
`;

const DownImage = styled.img`
  width: 8px;
  height: 8px;
  margin-top: 3px;
`;

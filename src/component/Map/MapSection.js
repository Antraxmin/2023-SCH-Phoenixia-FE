import React from "react";
import styled from "styled-components";
import map from "../../img/map/boothmap.png";

export default function MapSection() {
  const boothList = [
    {
      id: 1,
      name: "멋지다 쉐어링 & THUMB",
    },
    {
      id: 2,
      name: "팝콘 먹고 복음 듣자 & 키링제작, 표본향수",
    },
    {
      id: 3,
      name: "Festival People & Thu.g 거리노래방",
    },
    {
      id: 4,
      name: "순검회 & 검도 포토존",
    },
    {
      id: 5,
      name: "레진 소주잔 & 프레임 키링 제작 체험 및 수공예품 판매",
    },
    {
      id: 6,
      name: "Athletic training & Helth Care",
    },
    {
      id: 7,
      name: "봉사동아리 로타랙트 & 힐링캠프",
    },
    {
      id: 8,
      name: "너 T야? 유니브팅 왜 안 해?",
    },
    {
      id: 9,
      name: 'print("사랑 공식")',
    },
    {
      id: 10,
      name: "순천향에서 가장 빛나는 너에게",
    },
    {
      id: 11,
      name: "비터스윗 & 순천향대 GTEP-메타커머스원",
    },
    {
      id: 12,
      name: "클로저 & 열림마당",
    },
    {
      id: 13,
      name: "어서와요! & 뽀동랜드",
    },
    {
      id: 14,
      name: "타로",
    },
    {
      id: 15,
      name: "닭꼬치",
    },
    {
      id: 16,
      name: "SCH 대학원 오픈랩",
    },
    {
      id: 17,
      name: "SCH 대학원 오픈랩",
    },
    {
      id: 18,
      name: "SCH 대학원 오픈랩",
    },
    {
      id: 19,
      name: "밝은 눈 안과 & 시원스쿨",
    },
    {
      id: 20,
      name: "교수학습 가보자고~!",
    },
    {
      id: 21,
      name: "2023년도 해외봉사단 다문화인식개선캠페인",
    },
    {
      id: 22,
      name: "너 나한테 현장실습(IPP) 와라!",
    },
    {
      id: 23,
      name: "순천향 가족기업 및 입주기업 협의회",
    },
    {
      id: 24,
      name: "창업지원단",
    },
    {
      id: 25,
      name: "열린캠페인",
    },
    {
      id: 26,
      name: "총학생회 부스",
    },
    {
      id: 27,
      name: "총학생회 부스",
    },
    {
      id: 28,
      name: "총학생회 부스",
    },
    {
      id: 29,
      name: "분리수거장",
    },
  ];
  return (
    <Container>
      <BoothMap>
        <BoothMapImage />
      </BoothMap>
      <BoothInfo>
        <BoothListBox>
          {boothList.map((booth) => {
            return <BoothListItem key={booth.id} booth={booth} />;
          })}
        </BoothListBox>
      </BoothInfo>
    </Container>
  );
}

export function BoothListItem({ booth }) {
  return (
    <ListContainer>
      <BoothNumber>{booth.id}</BoothNumber>
      <div>{booth.name}</div>
    </ListContainer>
  );
}

const Container = styled.div`
  //   border: 2px solid red;
  height: 100%;
`;

const BoothMap = styled.div`
  padding: 10px;
  background-color: white;
`;

const BoothInfo = styled.div`
  height: 100%;
`;

const BoothMapImage = styled.img.attrs({
  src: `${map}`,
})`
  width: 100%;
  border-radius: 10px;
`;

const BoothListBox = styled.div`
  width: 100%;
  font-family: "GongGothicMedium";
  font-size: 14px;
  height: 100%;
`;

const ListContainer = styled.div`
  //   border: 1px solid green;
  padding: 5px 0px 5px 0px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0.5px 0.5px gray;
`;

const BoothNumber = styled.div`
  width: 30px;
  text-align: center;
  padding-right: 5px;
  padding-left: 10px;
  margin-right: 10px;
  margin-left: 5px;
`;

const BoothSeperate = styled.div`
  width: 10px;
`;

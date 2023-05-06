import styled from "styled-components";

export default function TimeTableNav() {
  const date = [
    {
      day: "9일",
      date: "화요일",
    },
    {
      day: "10일",
      date: "수요일",
    },
    {
      day: "11일",
      date: "목요일",
    },
  ];
  return (
    <>
      <Container>
        <Content date={date[0]} />
        <Content date={date[1]} />
        <Content date={date[2]} />
      </Container>
    </>
  );
}

export function Content({ date }) {
  return (
    <Today>
      <Date>{date.day}</Date>
      <Day>{date.date}</Day>
    </Today>
  );
}

const Container = styled.div`
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

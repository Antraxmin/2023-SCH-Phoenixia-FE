import React, { useState } from "react";
import style from "./SideDrawer.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import linkimage from "../../img/common/link.png";

export default function SideDrawer() {
  const [sideIsOpen, setSideIsOpen] = useState(true);
  return (
    <>
      {sideIsOpen && (
        <div className={style.side_drawer}>
          <div className={style.btn_box}>
            <img
              src="../../img/close-btn.png"
              width={20}
              onClick={() => {
                setSideIsOpen(!sideIsOpen);
              }}
            />
          </div>
          <div className={style.list_box}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/notice">공지사항</Link>
              </li>
              <li>
                <Link to="/timetable">공연 시간표</Link>
              </li>
              <li>
                <Link to="/foodtruck">푸드트럭</Link>
              </li>
              <li>
                <Link to="/booth">동아리/부스</Link>
              </li>
              <li>
                <Link to="/map">축제 지도</Link>
              </li>
              <li>
                <a href="https://fepe.waveon.io/" target="_blank">
                  <MBTIPage>
                    {" "}
                    나의 축제 MBTI 유형은? <img src={linkimage} width={18} />
                  </MBTIPage>
                </a>
              </li>
              <li id={style.about}>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const MBTIPage = styled.div`
  animation-name: random;
  animation-duration: 300ms;
  animation-iteration-count: infinite;
  padding: 10px;
  width: 100%;
  font-size: 13px;
  
  }
`;

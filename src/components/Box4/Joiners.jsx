import React, { useState, useEffect } from "react";

import Header from "../other/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import aarman from "../../assets/aarman.jpeg";
import nicolas from "../../assets/nicolas.jpeg";
import guillaume from "../../assets/guillaume.jpeg";
import jules from "../../assets/jules.jpeg";

function Joiners() {
  const leavers = [
    { name: "Guillaume Bouyat", date: "3 Feb 2025", image: guillaume },
    { name: "Jules Froeliger", date: "3 Feb 2025", image: jules },
    { name: "Aarman Murgai", date: "10 Oct 2024", image: aarman },
    { name: "Nicolas Goig", date: "01 Jul 2024", image: nicolas },
  ];

  const [visibleLeavers, setVisibleLeavers] = useState(leavers);

  useEffect(() => {
    const updateVisibleLeavers = () => {
      if (window.innerWidth < 1900) {
        setVisibleLeavers(leavers.slice(0, 4));
      } else {
        setVisibleLeavers(leavers);
      }
    };

    updateVisibleLeavers();
    window.addEventListener("resize", updateVisibleLeavers);
    return () => window.removeEventListener("resize", updateVisibleLeavers);
  }, [leavers]);

  return (
    <Container>
      <Header title={"Joiners"} icon={<FontAwesomeIcon icon={faUserPlus} />} />
      <YellowBox>
        <LeaversList>
          {visibleLeavers.map((leaver, index) => (
            <>
              <LeaverItem key={index}>
                <LeaverLeft>
                  <LeaverImage src={leaver.image} alt={leaver.name} />
                  <Name>{leaver.name}</Name>
                </LeaverLeft>
                <Date>{leaver.date}</Date>
              </LeaverItem>

              {index < visibleLeavers.length - 1 && <Divider />}
            </>
          ))}
        </LeaversList>
      </YellowBox>
    </Container>
  );
}

export default Joiners;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const LeaversList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  height: 150px; /* Adjust height based on the row size */
  overflow: hidden;
`;

const LeaverItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px 0;
`;

const LeaverLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LeaverImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Name = styled.span`
  color: #186e98;
  font-size: 0.7em;
`;

const Date = styled.span`
  color: #95bed2;
  font-size: 0.6em;
  text-align: right;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ecf5f9;
  margin: 1px 0;
`;

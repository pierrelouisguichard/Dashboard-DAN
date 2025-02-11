import React, { useState, useEffect } from "react";
import Header from "../other/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import aarman from "../../assets/aarman.jpeg";
import lucrezia from "../../assets/lucrezia.jpeg";
import federico from "../../assets/Federicco.jpeg";
import nicolas from "../../assets/nicolas.jpeg";
import gennaro from "../../assets/gennaro.jpeg";

function Leavers() {
  const leavers = [
    { name: "Aarman Murgai", date: "21 Dec 2024", image: aarman },
    { name: "Lucrezia Rossini", date: "21 Dec 2024", image: lucrezia },
    { name: "Federico Rotolo", date: "20 Nov 2024", image: federico },
    { name: "Nicolas Goig", date: "08 Nov 2024", image: nicolas },
    // { name: "Gennaro Bertolino", date: "07 Nov 2024", image: gennaro },
  ];

  const [visibleLeavers, setVisibleLeavers] = useState(leavers);

  useEffect(() => {
    const updateVisibleLeavers = () => {
      if (window.innerWidth < 1900) {
        setVisibleLeavers(leavers.slice(0, 3));
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
      <Header title={"Leavers"} icon={<FontAwesomeIcon icon={faUserMinus} />} />
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

export default Leavers;

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

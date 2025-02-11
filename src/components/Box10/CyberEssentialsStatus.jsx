import React from "react";
import Header from "../other/Header";
import styled from "styled-components";
import picture1 from "../../assets/cyber_essentials.png";
import picture2 from "../../assets/cyber_essentials_plus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function CyberEssentialsStatus() {
  return (
    <Container>
      <Header
        title={"Cyber Essentials Status"}
        icon={<FontAwesomeIcon icon={faCircleCheck} />}
      />
      <YellowBox>
        <ImagesWrapper>
          <StyledImage src={picture1} alt="Description of picture 1" />
          <StyledImage src={picture2} alt="Description of picture 2" />
        </ImagesWrapper>
        <ExpirationText>
          Cyber Essentials Expiration - 12th Dec 2025 <br /> Cyber Essentials
          Plus Expiration - 12th Dec 2025
        </ExpirationText>
      </YellowBox>
    </Container>
  );
}

export default CyberEssentialsStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Take full viewport height */
  width: 100%;
`;

const YellowBox = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 60px;
`;

const StyledImage = styled.img`
  max-width: 80%;
  height: auto;
  max-height: 100px;
  object-fit: contain;

  /* Add media queries to reduce image size on smaller devices */

  @media (max-height: 1000px) {
    max-height: 60px; /* Reduce the max-height on smaller devices */
  }

  @media (max-width: 768px) {
    max-height: 80px; /* Reduce the max-height on smaller devices */
  }

  @media (max-width: 480px) {
    max-height: 60px; /* Further reduce the max-height on very small devices */
  }
`;

const ExpirationText = styled.p`
  color: #95bed2;
  margin-top: 10px;
  font-size: 0.9rem;
`;

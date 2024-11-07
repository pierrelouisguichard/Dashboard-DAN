import React from "react";
import Header from "./Header";
import styled from "styled-components";
import picture1 from "../../assets/cyber_essentials.png";
import picture2 from "../../assets/cyber_essentials_plus.png";

function CyberEssentialsStatus() {
  return (
    <Container>
      <Header text={"Cyber Essentials Status"} />
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
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100px;
  object-fit: contain;
`;

const ExpirationText = styled.p`
  color: #95bed2;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;
`;

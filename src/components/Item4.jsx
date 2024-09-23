import React from "react";
import Item from "./Item";
import picture1 from "../assets/cyber_essentials.png";
import picture2 from "../assets/cyber_essentials_plus.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  justify-content: space-between;
  height: 100%; /* Allow it to take full height if necessary */
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 28px; /* Adjust the size as needed */
  font-weight: bold; /* Makes the title stand out */
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack images on small screens */
    align-items: center; /* Center images */
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 120px;
  object-fit: contain;
  transition: transform 0.2s; /* Add transition for hover effect */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const ExpirationText = styled.p`
  margin-bottom: 10px; /* Add margin for spacing */
  font-weight: bold; /* Make expiration text stand out */
  font-size: 20px;
`;

function Item4() {
  return (
    <Item colSpan={1} rowSpan={1}>
      <Container>
        <Title>Cyber Essentials Status</Title>
        <ImagesWrapper>
          <StyledImage src={picture1} alt="Description of picture 1" />
          <StyledImage src={picture2} alt="Description of picture 2" />
        </ImagesWrapper>
        <ExpirationText>
          Cyber Essentials Plus Expiration - 12th Dec 2025
        </ExpirationText>
      </Container>
    </Item>
  );
}

export default Item4;

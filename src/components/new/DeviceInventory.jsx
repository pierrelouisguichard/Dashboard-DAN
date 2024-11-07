import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DeviceInventory() {
  return (
    <Container>
      <Header text={"Device Inventory"} />
      <YellowBox>
        <Button>
          <TextContainer>
            <Number>23</Number>
            Desktops
          </TextContainer>
          <Chevron>
            <FontAwesomeIcon icon={faChevronDown} />
          </Chevron>
        </Button>
        <Button>
          <TextContainer>
            <Number>6</Number>
            Laptops
          </TextContainer>
          <Chevron>
            <FontAwesomeIcon icon={faChevronDown} />
          </Chevron>
        </Button>
        <Button>
          <TextContainer>
            <Number>16</Number>
            Phones
          </TextContainer>
          <Chevron>
            <FontAwesomeIcon icon={faChevronDown} />
          </Chevron>
        </Button>
      </YellowBox>
    </Container>
  );
}

export default DeviceInventory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Take full viewport height */
  width: 100%;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center buttons vertically */
  align-items: center; /* Center buttons horizontally */
`;

const Button = styled.button`
  background-color: transparent;
  color: #186e98;
  border: none;
  font-size: 24px; /* Adjust text size */
  cursor: pointer;
  height: 100%;
  width: 90%; /* Make the button take 90% of the width */
  border-bottom: 2px solid #ecf5f9;
  display: flex;
  justify-content: space-between; /* Space out the text container and the chevron */
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack number and name vertically */
  align-items: flex-start; /* Align to the left */
  line-height: 1.1; /* Adjust line-height to reduce space between number and name */
`;

const Number = styled.span`
  font-size: 4rem; /* Make the number much bigger */
  font-weight: bold; /* Make the number bold */
  margin-bottom: 2px; /* Reduce space between number and name */
`;

const Chevron = styled.span`
  font-size: 2rem; /* Size of the chevron */
`;

import React, { useState } from "react";
import Header from "./Header";
import DeviceTable from "./DeviceTable"; // Import the new DeviceTable component
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function DeviceInventory() {
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);

  const handleButtonClick = (deviceType) => {
    setSelectedDeviceType(deviceType);
  };

  const handleBackClick = () => {
    setSelectedDeviceType(null); // Reset to show buttons again
  };

  return (
    <Container>
      <Header text={"text"} title={"Device Inventory"} />
      <YellowBox>
        {selectedDeviceType ? (
          <>
            <BackButton onClick={handleBackClick}>
              <FontAwesomeIcon icon={faChevronLeft} /> Back
            </BackButton>
            <DeviceTable deviceType={selectedDeviceType} />
          </>
        ) : (
          <>
            <Button onClick={() => handleButtonClick("Desktops")}>
              <TextContainer>
                <Number>23</Number>
                Desktops
              </TextContainer>
              <Chevron>
                <FontAwesomeIcon icon={faChevronDown} />
              </Chevron>
            </Button>
            <Button onClick={() => handleButtonClick("Laptops")}>
              <TextContainer>
                <Number>6</Number>
                Laptops
              </TextContainer>
              <Chevron>
                <FontAwesomeIcon icon={faChevronDown} />
              </Chevron>
            </Button>
            <Button onClick={() => handleButtonClick("Phones")}>
              <TextContainer>
                <Number>16</Number>
                Phones
              </TextContainer>
              <Chevron>
                <FontAwesomeIcon icon={faChevronDown} />
              </Chevron>
            </Button>
          </>
        )}
      </YellowBox>
    </Container>
  );
}

export default DeviceInventory;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #186e98;
  border: none;
  font-size: 24px;
  cursor: pointer;
  height: 100%;
  width: 90%;
  border-bottom: 2px solid #ecf5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.1;
`;

const Number = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Chevron = styled.span`
  font-size: 2rem;
`;

const BackButton = styled.button`
  margin-left: 40px;
  width: 100%;
  /* background-color: blue; */
  background-color: transparent;
  color: #186e98;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start; /* Align children (icon and text) to the left */
  align-items: center;
  font-weight: bold;
  padding: 5px;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 8px;
  }
`;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import DataTable from "../DataTable";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { fetchDeviceData } from "../../graph";

function Devices() {
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);
  const { instance, accounts } = useMsal();
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });
          const data = await fetchDeviceData(response.accessToken);
          setDeviceData(data.value || []);
        } catch (error) {
          console.error("Error fetching device data", error);
        }
      }
    };

    fetchData();
  }, [accounts, instance]);

  const { desktops, laptops } =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "Windows") // Filter Windows devices
          .filter((device) => device.displayName.startsWith("LOW")) // Keep only those starting with "LOW"
          .reduce(
            (result, device) => {
              if (device.displayName[5] === "D") {
                result.desktops.push([device.displayName, device.model]); // Add to desktops
              } else if (device.displayName[5] === "L") {
                result.laptops.push([device.displayName, device.model]); // Add to laptops
              }
              return result;
            },
            { desktops: [], laptops: [] } // Initial object
          )
      : { desktops: [], laptops: [] }; // Default empty arrays if no data

  const iPhoneData =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "IPhone")
          .map((device) => [device.displayName, device.model])
      : [];

  const handleButtonClick = (deviceType) => {
    setSelectedDeviceType(deviceType);
  };

  const handleBackClick = () => {
    setSelectedDeviceType(null); // Reset to show buttons again
  };
  return (
    <YellowBox>
      {selectedDeviceType ? (
        <>
          <BackButton onClick={handleBackClick}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </BackButton>
          <DataTable
            label1="Computer's Name"
            label2="Model"
            data={
              selectedDeviceType === "Laptops"
                ? laptops
                : selectedDeviceType === "Desktops"
                ? desktops
                : selectedDeviceType === "Phones"
                ? iPhoneData
                : [] // Default to an empty array if no match
            }
          />
        </>
      ) : (
        <>
          <Button onClick={() => handleButtonClick("Desktops")}>
            <TextContainer>
              <Number>{desktops.length}</Number>
              Desktops
            </TextContainer>
            {/* <StyledDiv> */}
            <StyledParagraph>100% Encrypted</StyledParagraph>
            <StyledParagraph>100% Antivirus</StyledParagraph>
            {/* </StyledDiv> */}
            <Chevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </Chevron>
          </Button>
          <Button onClick={() => handleButtonClick("Laptops")}>
            <TextContainer>
              <Number>{laptops.length}</Number>
              Laptops
            </TextContainer>
            {/* <StyledDiv> */}
            <StyledParagraph>100% Encrypted</StyledParagraph>
            <StyledParagraph>100% Antivirus</StyledParagraph>
            {/* </StyledDiv> */}
            <Chevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </Chevron>
          </Button>
          <Button onClick={() => handleButtonClick("Phones")}>
            <TextContainer>
              <Number>{iPhoneData.length}</Number>
              Phones
            </TextContainer>
            <Chevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </Chevron>
          </Button>
        </>
      )}
    </YellowBox>
  );
}

export default Devices;

const StyledParagraph = styled.p`
  text-align: left;
  font-size: 0.9rem; /* Adjust this for your preferred smaller size */
  color: #95bed2;
`;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
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

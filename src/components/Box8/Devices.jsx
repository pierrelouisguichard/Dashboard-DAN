import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../API/authConfig";
import { fetchDeviceData } from "../../API/graph";
import MaterialTable from "./MaterialTable";

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
          setDeviceData(data);
        } catch (error) {
          console.error("Error fetching device data", error);
        }
      }
    };

    fetchData();
  }, [accounts, instance]);

  const desktops =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "Windows")
          .filter((device) => device.displayName.startsWith("LOW"))
          .filter((device) => device.displayName[5] === "D")
      : [];

  const laptops =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "Windows")
          .filter((device) => device.displayName.startsWith("LOW"))
          .filter((device) => device.displayName[5] === "L")
      : [];

  const iPhoneData =
    deviceData.length > 0
      ? deviceData.filter((device) => device.operatingSystem === "IPhone")
      : [];

  const handleButtonClick = (deviceType) => {
    setSelectedDeviceType(deviceType);
  };

  const handleBackClick = () => {
    setSelectedDeviceType(null);
  };
  return (
    <YellowBox>
      {selectedDeviceType ? (
        <>
          <BackButton onClick={handleBackClick}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </BackButton>
          <MaterialTable
            data={
              selectedDeviceType === "Laptops"
                ? laptops
                : selectedDeviceType === "Desktops"
                ? desktops
                : selectedDeviceType === "Phones"
                ? iPhoneData
                : []
            }
          />
        </>
      ) : (
        <Mid>
          <Button onClick={() => handleButtonClick("Desktops")}>
            <TextContainer>
              <Number>{desktops.length}</Number>
              Desktops
            </TextContainer>
            <Chevron>
              <FontAwesomeIcon icon={faChevronDown} />
            </Chevron>
          </Button>
          <Button onClick={() => handleButtonClick("Laptops")}>
            <TextContainer>
              <Number>{laptops.length}</Number>
              Laptops
            </TextContainer>
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
        </Mid>
      )}
    </YellowBox>
  );
}

export default Devices;

const YellowBox = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Mid = styled.div`
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
  font-size: 14px;
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
  font-size: 3rem;
  font-weight: bold;
`;

const Chevron = styled.span`
  font-size: 1.5rem;
`;

const BackButton = styled.button`
  padding-top: 20px;
  margin-left: 40px;
  width: 100%;
  background-color: transparent;
  color: #186e98;
  border: none;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 8px;
  }
`;

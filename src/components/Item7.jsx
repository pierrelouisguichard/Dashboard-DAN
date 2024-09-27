// src/components/Item7.js
import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import { loginRequest } from "../authConfig";
import { fetchDeviceData } from "../graph";
import { ProfileData } from "../components/ProfileData";
import { useMsal } from "@azure/msal-react";
import Title from "./Title";

function Item7() {
  const { instance, accounts } = useMsal();
  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      const acquireTokenAndFetchData = async () => {
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
      };
      acquireTokenAndFetchData();
    }
  }, [accounts, instance]);

  const renderProfileData = (os) => {
    if (!deviceData) {
      return <p>Loading</p>;
    }
    return <ProfileData graphData={deviceData} OS={os} />;
  };

  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>
        <Title text="Title" />
        <TableWrapper>
          <TableContainer>{renderProfileData("Windows")}</TableContainer>
          <TableContainer>{renderProfileData("IPhone")}</TableContainer>
        </TableWrapper>
      </Container>
    </Item>
  );
}

export default Item7;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 300px;
  box-sizing: border-box;
`;

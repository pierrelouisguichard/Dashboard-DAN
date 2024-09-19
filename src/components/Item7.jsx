// src/components/Item7.js
import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import { loginRequest } from "../authConfig";
import { fetchDeviceData } from "../graph";
import { ProfileData } from "../components/ProfileData";
import { useMsal } from "@azure/msal-react";

function Item7() {
  const { instance, accounts } = useMsal();
  const [deviceData, setDeviceData] = useState(null);

  function RequestDeviceData() {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        fetchDeviceData(response.accessToken).then((response) => {
          setDeviceData(response);
        });
      });
  }

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      RequestDeviceData();
    }
  }, [accounts]);

  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container2>
        <TableContainer>
          {deviceData ? (
            <ProfileData graphData={deviceData} OS={"Windows"} />
          ) : (
            <p>Loading</p>
          )}
        </TableContainer>
        <TableContainer>
          {deviceData ? (
            <ProfileData graphData={deviceData} OS={"IPhone"} />
          ) : (
            <p>Loading</p>
          )}
        </TableContainer>
      </Container2>
    </Item>
  );
}

export default Item7;

const Container2 = styled.div`
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

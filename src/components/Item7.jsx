import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import { loginRequest } from "../authConfig";
import { fetchDeviceData } from "../graph";
import { useMsal } from "@azure/msal-react";
import Title from "./Title";
import DataTable from "./DataTable";

const Item7 = () => {
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

  const windowsData =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "Windows")
          .map((device) => [device.displayName, device.model])
      : [];

  const iPhoneData =
    deviceData.length > 0
      ? deviceData
          .filter((device) => device.operatingSystem === "IPhone")
          .map((device) => [device.displayName, device.model])
      : [];

  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>
        <Title text="d'Angelin Estate Stats (Computers & Mobiles)" />
        <TableWrapper>
          <DataTable
            label1="Computer's Name"
            label2="Model"
            data={windowsData}
          />
          <DataTable label1="iPhone's Name" label2="Model" data={iPhoneData} />
        </TableWrapper>
      </Container>
    </Item>
  );
};

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
  overflow: hidden;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

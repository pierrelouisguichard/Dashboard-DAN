import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Devices from "./Devices";
import Users from "./Users";
import Softwares from "./Softwares";

function DeviceInventory() {
  const [activeTab, setActiveTab] = useState("Devices");

  const renderContent = () => {
    switch (activeTab) {
      case "Devices":
        return <Devices />;
      case "Softwares":
        return <Softwares />;
      case "Users":
        return <Users />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header
        text={
          <>
            <p>
              This component shows the total count of desktops, laptops, and
              phones. Displays percentages for encryption and antivirus
              coverage. Clicking on any category reveals additional details,
              including:
            </p>
            <ul
              style={{
                padding: "0",
                margin: "0",
                listStylePosition: "inside",
              }}
            >
              <li>Shows a detailed list of each device's name and model.</li>
            </ul>
          </>
        }
        title={"Device Inventory"}
      />
      <Tabs>
        <Tab
          onClick={() => setActiveTab("Devices")}
          active={activeTab === "Devices"}
        >
          Devices
        </Tab>
        <Tab
          onClick={() => setActiveTab("Softwares")}
          active={activeTab === "Softwares"}
        >
          Softwares
        </Tab>
        <Tab
          onClick={() => setActiveTab("Users")}
          active={activeTab === "Users"}
        >
          Users
        </Tab>
      </Tabs>
      <Content>{renderContent()}</Content>
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

const Tabs = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "#186e98" : "#555")};
  border: ${(props) =>
    props.active ? "1px solid #ddd" : "1px solid transparent"};
  border-bottom: ${(props) => (props.active ? "none" : "1px solid #ddd")};
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  border-radius: 5px 5px 0 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "white" : "#e9e9e9")};
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

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
        title={"d'Angelin Estate"}
      />
      <Centre>
        <RadioInputs>
          <Radio>
            <input
              type="radio"
              name="tab2"
              checked={activeTab === "Devices"}
              onChange={() => setActiveTab("Devices")}
            />
            <span className="name2">Devices</span>
          </Radio>
          <Radio>
            <input
              type="radio"
              name="tab2"
              checked={activeTab === "Softwares"}
              onChange={() => setActiveTab("Softwares")}
            />
            <span className="name2">Softwares</span>
          </Radio>
          <Radio>
            <input
              type="radio"
              name="tab2"
              checked={activeTab === "Users"}
              onChange={() => setActiveTab("Users")}
            />
            <span className="name2">Users</span>
          </Radio>
        </RadioInputs>
      </Centre>
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

const Centre = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioInputs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px #ecf5f9;
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
`;

const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;

  input {
    display: none;
  }

  .name2 {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: 0.2rem 0;
    color: #186e98;
    transition: all 0.15s ease-in-out;
  }

  input:checked + .name2 {
    background-color: #ecf5f9;
    font-weight: 600;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

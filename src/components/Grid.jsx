import styled from "styled-components";
import Title from "./new/Title";
import LogButton from "./new/LogButton";
import ExportPDF from "./new/ExportPDF";
import OverallScore from "./new/OverallScore";
import Spider from "./new/Spider";
import CyberEssentialsStatus from "./new/CyberEssentialsStatus";
import CyberRiskHeatMap from "./new/CyberRiskHeatMap";
import Joiners from "./new/Joiners";
import Leavers from "./new/Leavers";
import PhishingCampaign from "./new/PhishinCampaign";
import DeviceInventory from "./new/DeviceInventory";
import KeyDates from "./new/KeyDates";
import SecureScore from "./new/SecureScore";

const GridContainer = styled.div`
  background-color: #f0f0f0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  gap: 10px;
  max-width: 2700px;
  width: auto;
  height: 100vh;
  padding: 10px;
  aspect-ratio: 106 / 50;

  @media (max-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
    aspect-ratio: 4 / 8;
    max-width: 1000px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    aspect-ratio: 2 / 16;
    max-width: 500px;
    width: 100%;
    height: auto;
  }
`;

const Item = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  grid-column: span ${(props) => props.colSpan || 1};
  grid-row: span ${(props) => props.rowSpan || 1};
`;

const Navbar = styled(Item)`
  @media (max-width: 2000px) {
    grid-column: span 3;
  }
  @media (max-width: 1000px) {
    grid-column: span 2;
    grid-row: span 3;
  }
`;

const GridLayout = () => (
  <GridContainer>
    <Navbar colSpan={7} rowSpan={2}>
      <Title />
    </Navbar>

    <Item colSpan={1} rowSpan={1}>
      <LogButton />
    </Item>
    <Item colSpan={1} rowSpan={1}>
      <ExportPDF />
    </Item>
    <Item colSpan={2} rowSpan={8}>
      <OverallScore />
    </Item>

    <Item colSpan={2} rowSpan={8}>
      <Spider />
    </Item>
    <Item colSpan={2} rowSpan={4}>
      <KeyDates />
    </Item>
    <Item colSpan={2} rowSpan={4}>
      <CyberRiskHeatMap />
    </Item>
    <Item colSpan={2} rowSpan={12}>
      <PhishingCampaign />
    </Item>
    <Item colSpan={2} rowSpan={4}>
      <Joiners />
    </Item>
    <Item colSpan={2} rowSpan={8}>
      <SecureScore />
    </Item>
    <Item colSpan={2} rowSpan={8}>
      <DeviceInventory />
    </Item>
    <Item colSpan={2} rowSpan={4}>
      <Leavers />
    </Item>
    <Item colSpan={2} rowSpan={4}>
      <CyberEssentialsStatus />
    </Item>
  </GridContainer>
);

export default GridLayout;

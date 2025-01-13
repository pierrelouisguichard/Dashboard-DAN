import styled, { keyframes } from "styled-components";
import Title from "./new/Title";
import LogButton from "./new/LogButton";
import ExportPDF from "./new/ExportPDF";
import OverallScore from "./new/OverallScore";
import VulnerabilityManagement from "./new/VulnerabilityManagement";
import CyberEssentialsStatus from "./new/CyberEssentialsStatus";
import CyberRiskHeatMap from "./new/CyberRiskHeatMap";
import Joiners from "./new/Joiners";
import Leavers from "./new/Leavers";
import PhishingCampaign from "./new/PhishingCampaign";
import DeviceInventory from "./new/DeviceInventory";
import KeyDates from "./new/KeyDates";
import SecureScore from "./new/SecureScore";
import CyberMaturity from "./new/CyberMaturity";

const Background = styled.div`
  background-color: #f0f0f0;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  gap: 10px;
  max-width: 2200px;
  width: auto;
  height: 100vh;
  padding: 10px;
  aspect-ratio: 104 / 50;

  @media (max-width: 1900px) {
    grid-template-columns: repeat(4, 1fr);
    aspect-ratio: 4 / 8;
    max-width: 1000px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    aspect-ratio: 2 / 15;
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

  /* Apply the animation */
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);

  /* Stagger delay based on index */
  animation-delay: ${(props) => props.delay || 0}s;
`;

const Navbar = styled(Item)`
  @media (max-width: 1900px) {
    grid-column: span 3;
  }
  @media (max-width: 1000px) {
    grid-column: span 2;
    grid-row: span 3;
  }
`;

const GridLayout = () => (
  <Background>
    <GridContainer>
      <Navbar colSpan={7} rowSpan={2} delay={0}>
        <Title />
      </Navbar>

      <Item colSpan={1} rowSpan={1} delay={0.2}>
        <LogButton />
      </Item>
      <Item colSpan={1} rowSpan={1} delay={0.4}>
        <ExportPDF />
      </Item>
      <Item colSpan={2} rowSpan={8} delay={0.6}>
        <OverallScore />
      </Item>

      <Item colSpan={2} rowSpan={8} delay={0.8}>
        <CyberMaturity />
      </Item>
      <Item colSpan={2} rowSpan={8} delay={1.0}>
        <CyberRiskHeatMap />
      </Item>

      <Item colSpan={2} rowSpan={4} delay={1.2}>
        <Joiners />
      </Item>
      <Item colSpan={2} rowSpan={4} delay={1.4}>
        <Leavers />
      </Item>
      <Item colSpan={2} rowSpan={8} delay={1.6}>
        <PhishingCampaign />
      </Item>

      <Item colSpan={2} rowSpan={8} delay={1.8}>
        <VulnerabilityManagement />
      </Item>
      <Item colSpan={2} rowSpan={8} delay={2.0}>
        <DeviceInventory />
      </Item>
      <Item colSpan={2} rowSpan={4} delay={2.2}>
        <KeyDates />
      </Item>
      <Item colSpan={2} rowSpan={4} delay={2.4}>
        <CyberEssentialsStatus />
      </Item>
    </GridContainer>
  </Background>
);

export default GridLayout;

import React, { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(5, 65px);
  grid-template-rows: auto repeat(5, 65px);
  gap: 3px;
  position: relative;
`;

const Cell = styled.div`
  width: 65px;
  height: 65px;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 15px;
  border: none;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #424242; /* Default background */
  color: white; /* White text */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #d7d7d7; /* Change color on hover */
    transform: scale(1.05); /* Slight scaling on hover */
  }

  &:focus {
    outline: none; /* Remove focus outline */
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.5); /* Add focus shadow */
  }
`;

const LabelCell = styled.div`
  color: #186e98;
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

const PriorityTag = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 15px;
`;

const Critical = () => <PriorityTag bgColor="#f25352">Critical</PriorityTag>;
const High = () => <PriorityTag bgColor="#f07648">High</PriorityTag>;
const Medium = () => <PriorityTag bgColor="#fec144">Medium</PriorityTag>;
const Low = () => <PriorityTag bgColor="#29ac6e">Low</PriorityTag>;

const InfoCard = styled.div`
  font-size: 1rem;
  position: absolute;
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  height: 95%;
  z-index: 10;
  padding: 20px;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: none;
  overflow-y: auto; /* Allows scrolling if content overflows */

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #186e98;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #186e98;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 90%;
    height: auto;
  }
`;

const colorGrid = [
  ["#f07648", "#f07648", "#f25352", "#f25352", "#f25352"],
  ["#fec144", "#f07648", "#f07648", "#f25352", "#f25352"],
  ["#fec144", "#fec144", "#f07648", "#f07648", "#f25352"],
  ["#29ac6e", "#fec144", "#fec144", "#f07648", "#f07648"],
  ["#29ac6e", "#29ac6e", "#fec144", "#fec144", "#f07648"],
];

const borderRadiusGrid = [
  ["20px 5px 5px 5px", "5px", "5px", "5px", "5px 20px 5px 5px"],
  ["5px", "5px", "5px", "5px", "5px"],
  ["5px", "5px", "5px", "5px", "5px"],
  ["5px", "5px", "5px", "5px", "5px"],
  ["5px 5px 5px 20px", "5px", "5px", "5px", "5px 5px 20px 5px"],
];

const StyledGrid = () => {
  const [hoveredInfo, setHoveredInfo] = useState("");

  const infoCards = {
    weakPassword: (
      <InfoCard isVisible={hoveredInfo === "weakPassword"}>
        <h3>Weak Password Information</h3>
        <Critical>Critical</Critical>
        <p>
          A weak password is one that is easy for attackers to guess or crack.
          It typically includes common words, names, or sequential patterns like
          "123456" or "password". Always use a combination of upper and lower
          case letters, numbers, and special characters.
        </p>
      </InfoCard>
    ),
    socialEngineering: (
      <InfoCard isVisible={hoveredInfo === "socialEngineering"}>
        <h3>Social Engineering Information</h3>
        <Critical>Critical</Critical>
        <p>
          Social engineering involves manipulating people into revealing
          confidential information. Attackers often use tactics such as
          impersonation, phishing emails, or pretexting to gain access to
          sensitive data. Always be cautious about unsolicited requests for
          personal information.
        </p>
      </InfoCard>
    ),
    phishing: (
      <InfoCard isVisible={hoveredInfo === "phishing"}>
        <h3>Phishing Attacks</h3>
        <Critical>Critical</Critical>
        <p>
          Phishing attacks involve tricking individuals into revealing sensitive
          information, such as login credentials or financial details, by
          impersonating legitimate organizations through emails, fake websites,
          or text messages.
        </p>
      </InfoCard>
    ),
    ransomware: (
      <InfoCard isVisible={hoveredInfo === "ransomware"}>
        <h3>Ransomware Attack</h3>
        <High>High</High>
        <p>
          Ransomware is a type of malicious software that encrypts a victim's
          data and demands payment to unlock it. It's critical to back up data
          and use antivirus software to defend against such attacks.
        </p>
      </InfoCard>
    ),
    privilegedAccessMisuse: (
      <InfoCard isVisible={hoveredInfo === "privilegedAccessMisuse"}>
        <h3>Privileged Access Misuse</h3>
        <High>High</High>

        <p>
          Privileged access misuse occurs when an individual with elevated
          permissions uses them inappropriately to access, modify, or exfiltrate
          sensitive data. Proper controls and monitoring are essential to
          prevent misuse.
        </p>
      </InfoCard>
    ),
    zeroDayExploits: (
      <InfoCard isVisible={hoveredInfo === "zeroDayExploits"}>
        <h3>Zero-Day Exploits</h3>
        <Medium>Medium</Medium>
        <p>
          A zero-day exploit takes advantage of a software vulnerability that is
          unknown to the vendor and has no available patch. These
          vulnerabilities are often exploited by attackers before the issue is
          discovered.
        </p>
      </InfoCard>
    ),
    insiderThreats: (
      <InfoCard isVisible={hoveredInfo === "insiderThreats"}>
        <h3>Insider Threats</h3>
        <Low>Low</Low>
        <p>
          Insider threats occur when an individual within an organization
          intentionally or unintentionally causes harm to the organization, such
          as leaking sensitive data or sabotaging systems.
        </p>
      </InfoCard>
    ),
  };

  return (
    <Grid>
      {colorGrid.map((row, rowIndex) => (
        <>
          {/* Row labels */}
          <LabelCell key={`row-${rowIndex}`}>
            {["Impact", "Very High", "High", "Moderate", "Low"][rowIndex]}
          </LabelCell>

          {row.map((color, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              color={color}
              radius={borderRadiusGrid[rowIndex][colIndex]}
            >
              {rowIndex === 0 && colIndex === 4 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("weakPassword")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  1
                </Button>
              )}

              {rowIndex === 1 && colIndex === 4 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("socialEngineering")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  2
                </Button>
              )}

              {rowIndex === 1 && colIndex === 3 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("phishing")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  3
                </Button>
              )}

              {rowIndex === 1 && colIndex === 1 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("ransomware")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  4
                </Button>
              )}

              {rowIndex === 3 && colIndex === 3 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("privilegedAccessMisuse")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  5
                </Button>
              )}

              {rowIndex === 3 && colIndex === 2 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("zeroDayExploits")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  6
                </Button>
              )}

              {rowIndex === 3 && colIndex === 0 && (
                <Button
                  onMouseEnter={() => setHoveredInfo("insiderThreats")}
                  onMouseLeave={() => setHoveredInfo("")}
                >
                  7
                </Button>
              )}
            </Cell>
          ))}
        </>
      ))}
      <LabelCell />
      {["Low", "Moderate", "High", "Very High", "Likelihood"].map(
        (label, index) => (
          <LabelCell key={`col-${index}`}>{label}</LabelCell>
        )
      )}
      {/* Render Info Cards */}
      {Object.values(infoCards)}
    </Grid>
  );
};

export default StyledGrid;

import React from "react";
import Header from "./Header";
import styled from "styled-components";
import GaugeComponent from "react-gauge-component";

function OverallScore() {
  return (
    <Container>
      <Header text={"Overall Score"} />
      {/* <CenteredDiv>
        {" "}

      </CenteredDiv> */}
      <YellowBox>
        <div style={{ width: "90%" }}>
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ["#FF2121", "#05d316"],
              padding: 0.02,
              subArcs: [
                { limit: 40 },
                { limit: 60 },
                { limit: 70 },
                {},
                {},
                {},
                {},
              ],
            }}
            pointer={{
              type: "blob",
              animationDelay: 0,
            }}
            value={65}
            labels={{
              valueLabel: {
                style: {
                  textShadow: "none",
                },
              },
              tickLabels: {
                hideMinMax: true,
              },
            }}
          />
        </div>
        <StyledDiv>65%</StyledDiv>
      </YellowBox>
    </Container>
  );
}

export default OverallScore;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  padding-top: 10px;
  font-size: 4rem;
  font-weight: bold;
  color: #186e98;
`;

const YellowBox = styled.div`
  /* background-color: yellow; */
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

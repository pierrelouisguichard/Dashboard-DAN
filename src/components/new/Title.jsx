import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 10px;
  width: 100%; /* Prevents overflow */
  box-sizing: border-box; /* Includes padding in the width calculation */
  color: #186e98;
  font-weight: bold;
`;

function Title() {
  return <Wrapper>d’Angelin Cyber Security Dashboard</Wrapper>;
}

export default Title;

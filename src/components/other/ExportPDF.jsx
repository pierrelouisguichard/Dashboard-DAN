import React from "react";
import styled from "styled-components";
// Wrapper style for the button container
const Wrapper = styled.div`
  background-color: #186e98;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: white;

  /* Simple hover effect */
  &:hover {
    background-color: #1f8cb6; /* Slightly lighter background on hover */
    cursor: pointer;
  }
`;

function ExportPDF() {
  return <Wrapper>Export PDF</Wrapper>;
}

export default ExportPDF;

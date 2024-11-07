import React from "react";
import Header from "./Header";
import styled from "styled-components";

function Leavers() {
  return (
    <Wrapper>
      <Header text={"Leavers"} />
    </Wrapper>
  );
}

export default Leavers;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative; /* Allow the absolute positioning of Header */
`;

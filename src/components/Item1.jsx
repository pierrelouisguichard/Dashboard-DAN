import React from "react";
import Item from "./Item";
import Gauge from "./Gauge";
import styled from "styled-components";

function Item1() {
  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Gauge value={65} />
      </Container>
    </Item>
  );
}

export default Item1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px; // Optional padding to adjust layout spacing
`;

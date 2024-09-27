import React from "react";
import Item from "./Item";
import Gauge from "./Gauge";
import styled from "styled-components";
import Title from "./Title";

function Item1() {
  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Title text="Cyber Security Posture Status" />
        <Gauge value={65} />
      </Container>
    </Item>
  );
}

export default Item1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

import React from "react";
import Item from "./Item";
import styled from "styled-components";
import Title from "./Title";
import KeyCyberMetrics from "./KeyCyberMetrics";

function Item2() {
  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Title text="Cyber Security Posture Metrics" />
        <KeyCyberMetrics />
      </Container>
    </Item>
  );
}

export default Item2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// src/components/Item6.js
import React from "react";
import Item from "./Item";
import Title from "./Title";
import styled from "styled-components";
import Spider from "./Spider";

function Item6() {
  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>
        <Title text="Vulnerability Management" />
        <Spider />
      </Container>
    </Item>
  );
}

export default Item6;

const Container = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  justify-content: flex-start; // Align items to the start of the container
  align-items: center;
  width: 100%;
  height: 100%;
`;

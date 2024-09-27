// src/components/Item6.js
import React from "react";
import Item from "./Item";
import styled from "styled-components";
import Spider from "./Spider";

function Item6() {
  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>
        <Spider />
      </Container>
    </Item>
  );
}

export default Item6;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px; // Optional padding to adjust layout spacing
`;

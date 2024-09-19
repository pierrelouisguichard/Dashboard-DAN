// src/components/Item7.js
import React from "react";
import Item from "./Item";
import styled from "styled-components";

function Item7() {
  return (
    <Item colSpan={2} rowSpan={2} smallColSpan={1} smallRowSpan={4}>
      <Container>Item7</Container>
    </Item>
  );
}

export default Item7;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

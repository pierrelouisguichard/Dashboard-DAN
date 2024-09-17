import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  background-color: blue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  /* Default size */
  grid-column: span 1;
  grid-row: span 1;
  height: 200px;
`;

const Grid = () => {
  return (
    <GridContainer>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </GridContainer>
  );
};

export default Grid;

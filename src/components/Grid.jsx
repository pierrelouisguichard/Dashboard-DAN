import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  gap: 10px; /* Adjust gap as needed */

  /* Responsive Design */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #ccc; /* Example background color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Grid = () => {
  return (
    <GridContainer>
      {[...Array(8)].map((_, index) => (
        <GridItem key={index}>Item {index + 1}</GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;

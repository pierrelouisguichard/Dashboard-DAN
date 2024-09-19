import styled from "styled-components";

const GridContainer = styled.div`
  margin: 0px auto; /* Center horizontally */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 285px);
  max-width: 1800px;
  width: 100%;
  gap: 15px;
  padding: 15px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 285px);
  }
`;

const GridItem = styled.div`
  border-radius: 10px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Item1 = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 2;

  @media (max-width: 1199px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`;

const Item2 = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 2;

  @media (max-width: 1199px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`;

const Item3 = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 2;

  @media (max-width: 1199px) {
    grid-column: span 1;
    grid-row: span 2;
  }
`;

const Item4 = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 1;

  @media (max-width: 1199px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

const Item5 = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 1;

  @media (max-width: 1199px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

const Item6 = styled(GridItem)`
  grid-column: span 2;
  grid-row: span 2;

  @media (max-width: 1199px) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const Item7 = styled(GridItem)`
  grid-column: span 2;
  grid-row: span 2;

  @media (max-width: 1199px) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const GridLayout = ({ section }) => (
  <GridContainer>
    <Item1>Item 1</Item1>
    <Item2>Item 2</Item2>
    <Item3>Item 3</Item3>
    <Item4>Item 4</Item4>
    <Item5>Item 5</Item5>
    <Item6>Item 6</Item6>
    <Item7>{section}</Item7>
  </GridContainer>
);

export default GridLayout;

import styled from "styled-components";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import Item5 from "./Item5";
import Item6 from "./Item6";
import Item7 from "./Item7";

const GridContainer = styled.div`
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 22vh);
  max-width: 2400px;
  width: 100%;
  gap: 20px;
  padding: 15px;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 22vh);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(16, 22vh);
  }
`;

const GridLayout = () => (
  <GridContainer>
    <Item1 />
    <Item2 />
    <Item3 />
    <Item4 />
    <Item5 />
    <Item6 />
    <Item7 />
  </GridContainer>
);

export default GridLayout;

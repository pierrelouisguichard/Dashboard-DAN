// src/components/Item.js
import styled from "styled-components";

const Item = styled.div`
  border-radius: 10px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  grid-column: span ${(props) => props.colSpan || 1};
  grid-row: span ${(props) => props.rowSpan || 1};

  @media (max-width: 1700px) {
    grid-column: span ${(props) => props.colSpan || 1};
    grid-row: span ${(props) => props.rowSpan || 1};
  }

  @media (max-width: 1000px) {
    grid-column: span ${(props) => props.smallColSpan || props.colSpan || 1};
    grid-row: span ${(props) => props.smallRowSpan || props.rowSpan || 1};
  }
`;

export default Item;

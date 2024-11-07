import React from "react";
import Header from "./Header";
import styled from "styled-components";

function Leavers() {
  return (
    <Container>
      <Header text={"Leavers"} />
      <YellowBox>
        <Table>
          <Thead>
            <tr>
              <Th>Column 1</Th>
              <Th>Column 2</Th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <Td>Row 1, Col 1</Td>
              <Td>Row 1, Col 2</Td>
            </tr>
            <tr>
              <Td>Row 2, Col 1</Td>
              <Td>Row 2, Col 2</Td>
            </tr>
            <tr>
              <Td>Row 3, Col 1</Td>
              <Td>Row 3, Col 2</Td>
            </tr>
          </Tbody>
        </Table>
      </YellowBox>
    </Container>
  );
}

export default Leavers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

const Thead = styled.tbody`
  border-bottom: 2px solid #ecf5f9; /* Horizontal line between rows except the last */
`;

const Th = styled.th`
  color: #95bed2;
  font-size: 1.2rem;
  text-align: left;
  border: none;
`;

const Td = styled.td`
  color: #186e98;
  font-size: 1.2rem;
  text-align: left;
  border: none;
`;

const Tbody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: 2px solid #ecf5f9; /* Horizontal line between rows except the last */
  }
`;

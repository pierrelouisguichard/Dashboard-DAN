import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import stats from "../data/stats.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 28px; /* Adjust the size as needed */
  font-weight: bold; /* Makes the title stand out */
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  font-size: 14px;
  min-width: 400px;

  th,
  td {
    padding: 8px 20px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background-color: #f4f4f4;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const KeyDatesTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Details</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.No}>
          <td>{item.No}</td>
          <td>{item.Details}</td>
          <td>{item.Date}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

function Item5() {
  const [keyDates, setKeyDates] = useState([]);

  useEffect(() => {
    setKeyDates(stats["Calendar (Q3)"]);
  }, []);

  return (
    <Item colSpan={1} rowSpan={1}>
      <Container>
        <Title>Key Dates (Q3)</Title>
        <TableWrapper>
          <KeyDatesTable data={keyDates} />
        </TableWrapper>
      </Container>
    </Item>
  );
}

export default Item5;

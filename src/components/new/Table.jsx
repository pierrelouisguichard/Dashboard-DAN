import React from "react";
import styled from "styled-components";

const Table = ({ headers, rows }) => {
  return (
    <TableContainer>
      <TableElement>
        <Thead>
          <tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </tr>
          ))}
        </Tbody>
      </TableElement>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableElement = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
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

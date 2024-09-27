import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

const StyledTableContainer = styled(TableContainer)`
  height: 100%; /* Fill the height of the parent container */
  background-color: transparent; /* Set background to transparent */
  box-shadow: none; /* Remove any box shadow from Paper */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const StyledTable = styled(Table)`
  background-color: transparent; /* Set table background to transparent */
`;

const StyledTableCell = styled(TableCell)`
  background-color: transparent;
  cursor: pointer; /* Indicate that the header is clickable */
`;

const StyledTableHead = styled(TableHead)`
  background-color: #efefef;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const DataTable = ({ label1, label2, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    column: "",
    direction: "asc",
  });

  const handleSort = (columnIndex) => {
    const direction =
      sortConfig.column === columnIndex && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    const sorted = [...sortedData].sort((a, b) => {
      if (a[columnIndex] < b[columnIndex]) return direction === "asc" ? -1 : 1;
      if (a[columnIndex] > b[columnIndex]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ column: columnIndex, direction });
  };

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell onClick={() => handleSort(0)}>
              {label1}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort(1)}>
              {label2}
            </StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {sortedData.map(([deviceName, deviceType], index) => (
            <TableRow key={index}>
              <StyledTableCell>{deviceName}</StyledTableCell>
              <StyledTableCell>{deviceType}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default DataTable;

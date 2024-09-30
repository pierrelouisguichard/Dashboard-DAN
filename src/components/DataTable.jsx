import React, { useState, useEffect } from "react";
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
  height: 95%;
  background-color: transparent;
  box-shadow: none;
  overflow-y: auto;

  /* Custom Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #cacaca transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cacaca;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }
`;

const StyledTable = styled(Table)`
  background-color: transparent;
  border-collapse: collapse;
`;

const StyledTableCell = styled(TableCell)`
  background-color: transparent;
  color: #333;
  padding: 8px !important; /* Force reduced padding */
  font-weight: 500;
  font-size: 1.1rem !important; /* Increase font size */
`;

const StyledTableHead = styled(TableHead)`
  cursor: pointer;
  background-color: #f8f8f8;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f8f8f8; /* Light grey for even rows */
  }

  &:hover {
    background-color: #e3f2fd; /* Light blue on hover */
  }
`;

const SortIndicator = styled.span`
  margin-left: 5px;
  font-size: 1.1rem; /* Increase size for indicators */
`;

const DataTable = ({ label1, label2, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    column: 0,
    direction: "asc",
  });

  useEffect(() => {
    sortData(sortConfig.column, sortConfig.direction, data);
  }, [data]);

  const sortData = (columnIndex, direction, dataToSort) => {
    const sorted = [...dataToSort].sort((a, b) => {
      const aValue = a[columnIndex];
      const bValue = b[columnIndex];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return direction === "asc" ? aValue - bValue : bValue - aValue;
    });
    setSortedData(sorted);
  };

  const handleSort = (columnIndex) => {
    const direction =
      sortConfig.column === columnIndex && sortConfig.direction === "asc"
        ? "desc"
        : "asc";

    sortData(columnIndex, direction, sortedData);
    setSortConfig({ column: columnIndex, direction });
  };

  const getSortIndicator = (columnIndex) => {
    if (sortConfig.column !== columnIndex) return null;
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell onClick={() => handleSort(0)}>
              {label1}
              <SortIndicator>{getSortIndicator(0)}</SortIndicator>
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort(1)}>
              {label2}
              <SortIndicator>{getSortIndicator(1)}</SortIndicator>
            </StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {sortedData.map(([deviceName, deviceType], index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell>{deviceName}</StyledTableCell>
              <StyledTableCell>{deviceType}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default DataTable;

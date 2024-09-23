import React, { useState } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto; /* Center horizontally */
  overflow-x: auto; /* Allows horizontal scrolling if needed */
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #e7e7e7;
  border: none;
  color: #333;
  padding: 5px;
  margin: 0px;
`;

const TableContainer = styled.div`
  max-height: 38vh; /* Set a max height for vertical scrolling */
  overflow-y: auto; /* Allows vertical scrolling if needed */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: none;
  margin: 0 auto; /* Center table horizontally within TableWrapper */
`;

const Thead = styled.thead`
  background-color: #f4f4f4;
  position: sticky; /* Make the header sticky */
  top: 0; /* Stick to the top */
  z-index: 10; /* Ensure it is above other content */
`;

const Th = styled.th`
  padding: 8px;
  font-weight: bold;
  color: #333;
  text-align: center;
  cursor: pointer;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;

const Td = styled.td`
  padding: 8px;
  text-align: left; /* Align text to the left */
  color: #555;
`;

export const ProfileData = ({ graphData, OS }) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("model"); // State to track current sort column

  const devices = graphData.value.filter(
    (device) => device.operatingSystem === OS
  );

  const sortedDevices = [...devices].sort((a, b) => {
    const valueA = sortBy === "model" ? a.model || "" : a.displayName;
    const valueB = sortBy === "model" ? b.model || "" : b.displayName;

    return sortOrder === "asc"
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });

  const toggleSortOrder = (column) => {
    if (sortBy === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc"); // Default to ascending when changing sort column
    }
  };

  return (
    <TableWrapper>
      <Title>{OS} Devices List</Title>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th> {/* Number column header */}
              <Th onClick={() => toggleSortOrder("displayName")}>
                Device Name {sortOrder === "asc" ? "↑" : "↓"}
              </Th>
              <Th onClick={() => toggleSortOrder("model")}>
                Model {sortOrder === "asc" ? "↑" : "↓"}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedDevices.map((device, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td> {/* Row number */}
                <Td>{device.displayName}</Td>
                <Td>{device.model || "N/A"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

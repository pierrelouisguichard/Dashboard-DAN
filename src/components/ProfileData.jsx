import React, { useState } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 400px;
  overflow-x: auto;
  /* margin: 20px auto; */
`;

const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

const Thead = styled.thead`
  background-color: #f4f4f4;
`;

const Th = styled.th`
  padding: 5px;
  border-bottom: 2px solid #ccc;
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
  padding: 5px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  color: #555;
`;

const PaginationWrapper = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #e7e7e7;
  border: 1px solid #ddd;
  color: #333;
  padding: 5px;
  margin: 0px;
`;

export const ProfileData = ({ graphData, OS }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // State to keep track of sort order (ascending by default)
  const itemsPerPage = 12;

  // Filter devices based on OS
  const devices = graphData.value.filter(
    (device) => device.operatingSystem === OS
  );

  // Sort devices by model based on sortOrder
  const sortedDevices = [...devices].sort((a, b) => {
    const modelA = a.model || "";
    const modelB = b.model || "";

    if (sortOrder === "asc") {
      return modelA.localeCompare(modelB);
    } else {
      return modelB.localeCompare(modelA);
    }
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedDevices.length / itemsPerPage);

  // Calculate current devices to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDevices = sortedDevices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle next and previous page
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Toggle sort order between ascending and descending
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <TableWrapper>
      <Title>{OS} Devices List</Title>
      <Table>
        <Thead>
          <Tr>
            <Th>Device Name</Th>
            <Th onClick={toggleSortOrder}>
              Model {sortOrder === "asc" ? "↑" : "↓"}{" "}
              {/* Show arrow based on sort order */}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentDevices.map((device, index) => (
            <Tr key={index}>
              <Td>{device.displayName}</Td>
              <Td>{device.model || "N/A"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <PaginationWrapper>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationWrapper>
    </TableWrapper>
  );
};

import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 80%; /* Adjust this value to your desired width */
  max-width: 1200px; /* Optional: Set a maximum width */
  border-collapse: collapse;
  margin: 20px auto; /* Center the table horizontally */
  font-size: 18px;
  text-align: left;
`;

const Thead = styled.thead`
  background-color: #f4f4f4;
`;

const Th = styled.th`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const ProfileData = ({ graphData }) => {
  const devices = graphData.value;

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Device Name</Th>
            <Th>Model</Th>
          </Tr>
        </Thead>
        <Tbody>
          {devices.map((device, index) => (
            <Tr key={index}>
              <Td>{device.displayName}</Td>
              <Td>{device.model || "N/A"}</Td>{" "}
              {/* Fallback to 'N/A' if model is not provided */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

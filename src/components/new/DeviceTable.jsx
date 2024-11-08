import React from "react";
import styled from "styled-components";

function DeviceTable({ deviceType }) {
  // Example data for devices
  const data = [
    {
      deviceName: `${deviceType} 1`,
      sophos: "Active",
      bitLocker: "Enabled",
      windows: "10 Pro",
    },
    {
      deviceName: `${deviceType} 2`,
      sophos: "Inactive",
      bitLocker: "Disabled",
      windows: "11 Home",
    },
    {
      deviceName: `${deviceType} 3`,
      sophos: "Active",
      bitLocker: "Enabled",
      windows: "10 Pro",
    },
    {
      deviceName: `${deviceType} 4`,
      sophos: "Active",
      bitLocker: "Enabled",
      windows: "11 Pro",
    },
    {
      deviceName: `${deviceType} 5`,
      sophos: "Inactive",
      bitLocker: "Disabled",
      windows: "10 Home",
    },
    // Add more rows as needed
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Sophos</th>
            <th>BitLocker</th>
            <th>Windows</th>
          </tr>
        </thead>
        <tbody>
          {data.map((device, index) => (
            <tr key={index}>
              <td>{device.deviceName}</td>
              <td>{device.sophos}</td>
              <td>{device.bitLocker}</td>
              <td>{device.windows}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default DeviceTable;

const TableContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  max-height: 300px; /* Set a max-height for the table container */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  width: 100%; /* Full width */
`;

const Table = styled.table`
  font-size: 1rem;
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 5px;
    border: 1px solid #ddd;
  }
  th {
    color: #95bed2;
    border: none;
  }
  td {
    color: #186e98;
    border: none;
  }
  tbody {
    tr:not(:last-child) {
      border-bottom: 2px solid #ecf5f9; /* Horizontal line between rows except the last */
    }
  }
`;

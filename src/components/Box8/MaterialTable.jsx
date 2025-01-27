import React, { useState, useMemo } from "react";
import styled from "styled-components";

const MaterialTable = ({ data }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("displayName");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedArray = array.map((el, index) => [el, index]);
    stabilizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  if (!Array.isArray(data) || data.length === 0) {
    return <NoDataMessage>No data available</NoDataMessage>;
  }

  const sortedData = stableSort(data, getComparator(order, orderBy));

  return (
    <Container>
      <TableContainer>
        <StyledTable>
          <Thead>
            <tr>
              {["displayName", "manufacturer", "model", "operatingSystem"].map(
                (column) => (
                  <Th
                    key={column}
                    onClick={() => handleRequestSort(column)}
                    style={{ cursor: "pointer" }}
                  >
                    {column.charAt(0).toUpperCase() +
                      column.slice(1).replace(/([A-Z])/g, " $1")}
                  </Th>
                )
              )}
            </tr>
          </Thead>
          <Tbody>
            {sortedData.map((device) => (
              <tr key={device.id}>
                <Td>{device.displayName || "N/A"}</Td>
                <Td>{device.manufacturer || "N/A"}</Td>
                <Td>{device.model || "N/A"}</Td>
                <Td>{device.operatingSystem || "N/A"}</Td>
              </tr>
            ))}
          </Tbody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

export default MaterialTable;

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 8px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #fff; /* Ensures background color is solid */
  z-index: 1;
  padding-right: 5px;
`;

const Th = styled.th`
  color: #95bed2;
  font-size: 0.8rem;
  text-align: left;
  padding-right: 5px;
`;

const Tbody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: 2px solid #ecf5f9;
  }
`;

const Td = styled.td`
  color: #186e98;
  font-size: 0.8rem;
  text-align: left;
  padding-right: 5px;

  &:nth-child(1) {
    padding-right: 1rem;
  }
`;

const NoDataMessage = styled.div`
  color: #186e98;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 20px;
`;

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const MaterialTable = ({ data }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("displayName");
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting function
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Create sorting comparator
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
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter((device) => {
      return (
        device.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.manufacturer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.operatingSystem?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm, data]);

  if (!Array.isArray(data) || data.length === 0) {
    return <NoDataMessage>No data available</NoDataMessage>;
  }

  const sortedData = stableSort(filteredData, getComparator(order, orderBy));

  return (
    <Container>
      <SearchWrapper>
        <SearchField
          label="Search Devices"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </SearchWrapper>

      <TableContainer component={StyledPaper}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                "displayName",
                "manufacturer",
                "model",
                "operatingSystem",
                "approximateLastSignInDateTime",
              ].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : "asc"}
                    onClick={() => handleRequestSort(column)}
                  >
                    {column.charAt(0).toUpperCase() +
                      column.slice(1).replace(/([A-Z])/g, " $1")}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((device) => (
              <StyledTableRow key={device.id}>
                <StyledTableCell>{device.displayName || "N/A"}</StyledTableCell>
                <StyledTableCell>
                  {device.manufacturer || "N/A"}
                </StyledTableCell>
                <StyledTableCell>{device.model || "N/A"}</StyledTableCell>
                <StyledTableCell>
                  {device.operatingSystem || "N/A"}
                </StyledTableCell>
                <StyledTableCell>
                  {device.approximateLastSignInDateTime
                    ? new Date(
                        device.approximateLastSignInDateTime
                      ).toLocaleString()
                    : "N/A"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MaterialTable;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 100%;
`;

const SearchWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchField = styled(TextField)`
  width: 100%;
`;

const StyledPaper = styled(Paper)`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const StyledTableCell = styled(TableCell)`
  padding: 16px;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const NoDataMessage = styled.div`
  font-size: 18px;
  text-align: center;
  color: #555;
  padding: 50px;
`;

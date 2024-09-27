import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import stats from "../data/stats.json";
import Title from "./Title";
import DataTable from "./DataTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  border-radius: 8px;
`;

function Item5() {
  const [keyDates, setKeyDates] = useState([]);

  useEffect(() => {
    const rawData = stats["Calendar (Q3)"];

    if (Array.isArray(rawData)) {
      // Transform the data to match the expected format for DataTable
      const transformedData = rawData.map(({ Details, Date }) => [
        Details, // Use "Details" as the first entry
        Date, // Use "Date" as the second entry
      ]);

      console.log("Transformed Data:", transformedData); // Log the transformed data for debugging
      setKeyDates(transformedData);
    } else {
      console.error("Expected rawData to be an array.");
    }
  }, []);

  return (
    <Item colSpan={1} rowSpan={1}>
      <Container>
        <Title text="Calendar Events - Key Dates" />
        <TableWrapper>
          <DataTable label1="Event" label2="Date" data={keyDates} />
        </TableWrapper>
      </Container>
    </Item>
  );
}

export default Item5;

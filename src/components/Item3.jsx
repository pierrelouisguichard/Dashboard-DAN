import React, { useState, useEffect } from "react";
import Item from "./Item";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
} from "recharts";
import stats from "../data/stats.json";
import Title from "./Title";
import styled from "styled-components";
import DataTable from "./DataTable";

const legend = ["0", "Low", "Med", "High", "V. High"];
const getLabel = (value) => legend[value] || "";

const data = stats["Cyber Risk (Q3)"].map(
  ({ Likelihood, Impact, ...rest }) => ({
    ...rest,
    Likelihood,
    Impact,
  })
);

const referenceAreas = [
  { x1: 0, x2: 2, y1: 3, y2: 2, fill: "red" },
  { x1: 0, x2: 1, y1: 1, y2: 2, fill: "orange" },
  { x1: 0, x2: 1, y1: 0, y2: 1, fill: "green" },
  { x1: 1, x2: 2, y1: 0, y2: 2, fill: "orange" },
  { x1: 2, x2: 3, y1: 0, y2: 3, fill: "red" },
  { x1: 0, x2: 3, y1: 4, y2: 3, fill: "darkred" },
  { x1: 3, x2: 4, y1: 0, y2: 4, fill: "darkred" },
];

const renderReferenceAreas = () => (
  <>
    {referenceAreas.map(({ x1, x2, y1, y2, fill }, index) => (
      <ReferenceArea
        key={index}
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
        fill={fill}
        fillOpacity={0.2}
      />
    ))}
  </>
);

function Item3() {
  const [keyDates, setKeyDates] = useState([]);

  useEffect(() => {
    const rawData = stats["Cyber Risk (Q3)"];
    if (Array.isArray(rawData)) {
      const transformedData = rawData.map(({ Name, Threat }) => [Name, Threat]);
      console.log("Transformed Data:", transformedData);
      setKeyDates(transformedData);
    } else {
      console.error("Expected rawData to be an array.");
    }
  }, []);

  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Title text="Cyber Risk Head Map" />
        <ChartWrapper>
          <ScatterChart width={500} height={300}>
            <CartesianGrid />
            {renderReferenceAreas()}
            <XAxis
              type="number"
              dataKey="Likelihood"
              name="Likelihood"
              domain={[0, 4]}
              ticks={legend.map((_, i) => i)}
              tickFormatter={getLabel}
            />
            <YAxis
              type="number"
              dataKey="Impact"
              name="Impact"
              domain={[0, 4]}
              ticks={legend.map((_, i) => i)}
              tickFormatter={getLabel}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="Risks" data={data} fill="#8884d8" />
          </ScatterChart>
        </ChartWrapper>
        <TableWrapper>
          <DataTable label1="Risk Name" label2="Threat Score" data={keyDates} />
        </TableWrapper>
      </Container>
    </Item>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ChartWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default Item3;

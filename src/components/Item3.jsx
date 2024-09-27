// src/components/Item3.js
import React from "react";
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

const data = stats["Cyber Risk (Q3)"].map(
  ({ Likelihood, Impact, ...rest }) => ({
    ...rest,
    Likelihood,
    Impact,
  })
);

const legend = ["0", "Low", "Med", "High", "V. High"];
const getLabel = (value) => legend[value] || "";

function Item3() {
  return (
    <Item colSpan={1} rowSpan={2}>
      <Container>
        <Title text="Cyber Risk Head Map" />
        <ScatterChart width={500} height={300}>
          <CartesianGrid />
          <ReferenceArea
            x1={0}
            x2={2}
            y1={3}
            y2={2}
            fill="red"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={0}
            x2={1}
            y1={1}
            y2={2}
            fill="orange"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={0}
            x2={1}
            y1={0}
            y2={1}
            fill="green"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={1}
            x2={2}
            y1={0}
            y2={2}
            fill="orange"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={2}
            x2={3}
            y1={0}
            y2={3}
            fill="red"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={0}
            x2={3}
            y1={4}
            y2={3}
            fill="darkred"
            fillOpacity={0.2}
          />
          <ReferenceArea
            x1={3}
            x2={4}
            y1={0}
            y2={4}
            fill="darkred"
            fillOpacity={0.2}
          />
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
      </Container>
    </Item>
  );
}

export default Item3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

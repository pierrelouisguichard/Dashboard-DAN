import React from "react";
import GaugeComponent from "react-gauge-component";

const Gauge = ({ value }) => {
  return (
    <>
      <div style={{ width: "80%", height: "80%", maxWidth: "500px" }}>
        <GaugeComponent
          value={value}
          type="radial"
          labels={{
            valueLabel: {
              style: {
                fontFamily: "helvetica", // Font family
                fontSize: "35px", // Font size
                fill: "#4b4b4b", // Color of the value label
              },
            },
            tickLabels: {
              type: "inner",
              ticks: [
                { value: 20 },
                { value: 40 },
                { value: 60 },
                { value: 80 },
                { value: 100 },
              ],
              style: {
                fontSize: "10px",
                fill: "#464A4F", // Color for tick labels
              },
            },
          }}
          arc={{
            colorArray: ["#EA4228", "#5BE12C"],
            subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
            padding: 0.02,
            width: 0.3,
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
          }}
        />
      </div>
    </>
  );
};

export default Gauge;

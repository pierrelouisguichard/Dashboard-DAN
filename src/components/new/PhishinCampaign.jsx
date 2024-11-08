import React from "react";
import ApexCharts from "react-apexcharts";
import Header from "./Header";
import Table from "./Table";
import styled from "styled-components";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Opened",
          data: [67, 83],
        },
        {
          name: "Unopened",
          data: [23, 17],
        },
        {
          name: "Reported",
          data: [19, 32],
        },
        {
          name: "Clicked",
          data: [11, 6],
        },
      ],
      options: {
        chart: {
          type: "bar",
          width: "100%",
          height: "100%",
          foreColor: "#186E98",
          fontFamily: "Nunito",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            colors: {
              ranges: [
                { from: 0, to: 1, color: "#6BD6EE" },
                { from: 1, to: 2, color: "#EEC16B" },
                { from: 2, to: 3, color: "#C46BEE" },
                { from: 3, to: 4, color: "#EE6B6B" },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        xaxis: {
          categories: ["10/02/2022 (12 Users)", "10/01/2024 (20 Users)"],
          labels: {
            style: {
              colors: ["#186E98"],
              fontFamily: "Nunito",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#186E98"],
              fontFamily: "Nunito",
              fontSize: "16px", // Make y-axis labels larger
            },
            formatter: function (val) {
              return val + "%"; // Append percentage sign to y-axis labels
            },
          },
        },
        fill: {
          opacity: 1,
          colors: ["#6BD6EE", "#EEC16B", "#C46BEE", "#EE6B6B"],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"; // Display percentage in the tooltip
            },
          },
          theme: "dark",
        },
        legend: {
          labels: {
            colors: ["#186E98"],
            fontFamily: "Nunito",
          },
        },
      },
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {" "}
        {/* Ensures the div takes full space */}
        <ApexCharts
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

function PhishinCampaign() {
  const headers = ["Name", "Click-Prone %"];
  const rows = [
    ["Person 1", "22"],
    ["Person 2", "19"],
    ["Person 3", "15"],
  ];

  return (
    <Container>
      <Header text={"text"} title={"Phishin Campaign"} />
      <YellowBox>
        <Title>Click Prone</Title>
        <BoxTwoThirds>
          <ApexChart /> {/* Chart component added here */}
        </BoxTwoThirds>
        <Title>Top Highest Risk Users</Title>
        <BoxOneThird>
          <Table headers={headers} rows={rows} />
        </BoxOneThird>
      </YellowBox>
    </Container>
  );
}

export default PhishinCampaign;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const BoxTwoThirds = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const Title = styled.div`
  color: #186e98;
  flex: 0.2;
  height: 100%;
`;

const BoxOneThird = styled.div`
  flex: 1;
  height: 100%;
`;

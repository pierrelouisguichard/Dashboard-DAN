import React from "react";
import ReactApexChart from "react-apexcharts";

const IVS = () => {
  const options = {
    series: [
      {
        name: "Medium",
        data: [61, 13, 11, 13],
      },
      {
        name: "High",
        data: [623, 116, 108, 173],
      },
      {
        name: "Critical",
        data: [756, 404, 80, 47],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
      fontFamily: "'Nunito', sans-serif", // Apply Nunito font to the entire chart
    },
    colors: ["#eec16b", "#c46bee", "#ee6b6b"], // Custom colors for each series
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "11px",
              fontWeight: 600,
              color: "#186e98",
            },
          },
          style: {
            colors: ["#186e98"],
          },
        },
      },
    },
    xaxis: {
      type: "category", // Use category type for custom dates
      categories: ["Jun'23", "Jun'24", "Oct'24", "Dec'24"],
      labels: {
        style: {
          colors: "#186e98",
          fontFamily: "'Nunito', sans-serif", // Apply Nunito font to x-axis labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#186e98",
          fontFamily: "'Nunito', sans-serif", // Apply Nunito font to y-axis labels
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
      labels: {
        colors: "#186e98",
        fontFamily: "'Nunito', sans-serif", // Apply Nunito font to legend labels
      },
    },
    tooltip: {
      style: {
        color: "#186e98",
        fontFamily: "'Nunito', sans-serif", // Apply Nunito font to tooltips
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
};

export default IVS;

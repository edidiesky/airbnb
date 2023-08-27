import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
export default function Charts() {
  const [chart, setChart] = useState({
    // options: {
    //   chart: {
    //     id: "apexchart-example",
    // background: "#f8f8f8",
    // fontFamily: "Nunito, sans-serif",
    //   },
    //   plotOptions: {
    //     line: {
    //       horizontal: false,
    //       barWidth: "50%", // Adjust this value to control line width
    //     },
    //   },

    //   legend: {
    //     show: true,
    //   },
    //   colors: ["#007bff", "#dc3545"],

    //   // tooltip: {
    //   //   enabled: true,
    //   //   style: {
    //   //     fontSize: "14px",
    //   //     fontFamily: "Arial, sans-serif",
    //   //     backgroundColor: "rgba(0, 0, 0, 0.8)",
    //   //     color: "#ffffff",
    //   //     borderRadius: "5px",
    //   //   },
    //   // },
    //   xaxis: {
    //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    //   },
    //   yaxis: {
    //     lines: 5,
    //     borderColor: "#e0e0e0",
    //     strokeDashArray: "2,2",
    //   },
    // },
    // series: [
    //   {
    //     name: "series-1",
    //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //     markers: {
    //       size: 8,
    //       fillColors: ["#007bff"],
    //       strokeColors: ["#0056b3"],
    //       strokeWidth: 2,
    //     },
    //   },
    // ],

    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 550,
        background: "#e0e0e0",
        fontFamily: "Nunito, sans-serif",
      },
      colors:['#000',"#fff"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      }
    },
  });

  return (
    <ChartsWrapper>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        width={"100%"}
        height={500}
      />
    </ChartsWrapper>
  );
}

const ChartsWrapper = styled.div`
  h3 {
    font-family: "Nunito", sans-serif;
  }
`;

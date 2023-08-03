import React, { useState } from "react";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export default function Charts() {
  const option = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
        type:"column"
      },
    ],
  };

  return (
    <ChartsWrapper>
      <div className="w-100 flex column gap-1">
        <HighchartsReact highcharts={Highcharts} options={option} />
      </div>
    </ChartsWrapper>
  );
}

const ChartsWrapper = styled.div`
  h3 {
    font-family: "Montserrat", sans-serif;
  }
`;

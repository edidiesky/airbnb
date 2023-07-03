import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import styled from "styled-components";

export default function DateInput() {
  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return (
    <DateRange
      rangeColors={["#2b2626"]}
      ranges={[selectionRange]}
      onChange={handleSelect}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
    //   disabledDates={Date}
    />
  );
}

const DateContainer = styled.div`
  width: 100%;
`;

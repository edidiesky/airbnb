import styled from "styled-components";
import React from "react";
import Charts from "../common/charts";

export default function HostEarningIndex() {
  return (
    <>
      <HostEarningIndexPlaceContainer className="">
        <div className="w-90 auto flex column gap-1">
          <div className="selectform column flex">
            <h3 className="fs-20 text-grey text-light">Select month</h3>
          </div>
          <h2 className="fs-50 text-extra-bold">
            $0.00
            <span className="block fs-16 text-grey text-light">
              Booked earnings for 2023
            </span>
          </h2>
          <Charts />
        </div>
      </HostEarningIndexPlaceContainer>
    </>
  );
}

const HostEarningIndexPlaceContainer = styled.div`
  width: 100%;
  h3,h2 {
    font-family: "Montserrat", sans-serif;
  }
  padding: 5rem 0;
`;

import styled from "styled-components";
import React from "react";
import HostEarningIndex from "../../components/dashboard/earnings";

export default function HostEarnings() {
  return (
    <>
      <HostEarningsPlaceContainer className="flex item-center justify-center">
        <HostEarningIndex />
      </HostEarningsPlaceContainer>
    </>
  );
}

const HostEarningsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 4rem;
`;

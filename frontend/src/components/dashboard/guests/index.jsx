import styled from "styled-components";
import React from "react";
import HostGuestsLeftIndex from "./left";
import HostGuestsRightIndex from "./right";

export default function HostGuestsIndex() {
  return (
    <>
      <HostGuestsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto grid_wrapper">
          <HostGuestsLeftIndex />
          <HostGuestsRightIndex />
        </div>
      </HostGuestsIndexPlaceContainer>
    </>
  );
}

const HostGuestsIndexPlaceContainer = styled.div`
  width: 100%;
  .grid_wrapper {
    display: grid;
    grid-template-columns: 29vw 1fr;
    grid-gap: 2rem;
    place-items: start;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
`;

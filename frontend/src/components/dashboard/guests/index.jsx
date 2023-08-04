import styled from "styled-components";
import React from "react";
import HostGuestsLeftIndex from "./left";
import HostGuestsRightIndex from "./right";

export default function HostGuestsIndex() {
  return (
    <>
      <HostGuestsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-100 flex_wrapper">
          <HostGuestsLeftIndex />
          <HostGuestsRightIndex />
        </div>
      </HostGuestsIndexPlaceContainer>
    </>
  );
}

const HostGuestsIndexPlaceContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  .flex_wrapper {
    display: flex;
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`;

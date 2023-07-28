import styled from "styled-components";
import React from "react";

export default function HostLayout() {
  return (
    <>
      <HostLayoutPlaceContainer className="flex item-center justify-center">
      </HostLayoutPlaceContainer>
    </>
  );
}

const HostLayoutPlaceContainer = styled.div`
  width: 100%;
`;

import styled from "styled-components";
import React from "react";
import HostOrderIndex from "../../components/dashboard/orders";

export default function HostOrders() {
  return (
    <>
      <HostOrdersPlaceContainer className="flex item-center justify-center">
        <HostOrderIndex />
      </HostOrdersPlaceContainer>
    </>
  );
}

const HostOrdersPlaceContainer = styled.div`
  width: 100%;
`;

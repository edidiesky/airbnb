import styled from "styled-components";
import React from "react";
import Footer from "../../components/common/Footer";
import HostOrderIndex from "../../components/dashboard/orders";

export default function HostOrders() {
  return (
    <>
      <HostOrdersPlaceContainer className="flex column gap-2 item-center justify-center">
        <HostOrderIndex />
        <Footer/>
      </HostOrdersPlaceContainer>
    </>
  );
}

const HostOrdersPlaceContainer = styled.div`
  width: 100%;
`;

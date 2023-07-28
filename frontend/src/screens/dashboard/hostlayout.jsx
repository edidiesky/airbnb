import styled from "styled-components";
import { Outlet } from "react-router-dom";
import React from "react";
import Hostheader from "../../components/dashboard/common/hostheader";

export default function HostLayout() {
  return (
    <>
      <HostLayoutPlaceContainer className="flex column">
        <Hostheader />
        <div className="outletWrapper">
          <Outlet />
        </div>
      </HostLayoutPlaceContainer>
    </>
  );
}

const HostLayoutPlaceContainer = styled.div`
  width: 100%;
`;

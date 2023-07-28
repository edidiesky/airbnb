import styled from "styled-components";
import React from "react";

export default function HostInbox() {
  return (
    <>
      <HostInboxPlaceContainer className="flex item-center justify-center">
        {/* <HostInboxPlace /> */}
      </HostInboxPlaceContainer>
    </>
  );
}

const HostInboxPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 4rem;
`;

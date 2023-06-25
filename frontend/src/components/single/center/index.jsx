import React from "react";
import styled from "styled-components";
import LeftCenter from "./left";
import RightCenter from "./right";

const CenterIndex = () => {
  return (
    <CenterWrapper>
      <LeftCenter />
      <div className="rightwrapper">
        <RightCenter />
      </div>
    </CenterWrapper>
  );
};
const CenterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 27vw;
  /* place-items: start; */
  @media (max-width:780px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .rightwrapper {
    width: 100%;
  }
`;
export default CenterIndex;

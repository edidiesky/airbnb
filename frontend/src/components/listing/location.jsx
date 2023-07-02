import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import { categorydata } from "../../data/category";
export default function LocationofPlace() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <LocationofPlaceContainer>
        <div className="aboutCenter flex column gap-3 justify-center item-center w-85 auto">
          <h2 className="text-bold w-100 text-start text-dark">
            Where's your place located?
            <span className="fs-20 text-light text-grey">
              Your address is only shared with guests after they’ve made a
              reservation.
            </span>
          </h2>
        </div>
      </LocationofPlaceContainer>
      <FooterHosting
        prev={"373646/about-your-place"}
        next={"373646/structure"}
      />
    </>
  );
}

const LocationofPlaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 6rem;
  h2 {
    font-size: 29px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
`;

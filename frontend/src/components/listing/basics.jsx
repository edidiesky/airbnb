import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import Map from "../forms/map";
export default function BasicInfoAboutPlace() {
  return (
    <>
      <BasicInfoAboutPlaceContainer>
        <div className="aboutCenter flex column gap-2 justify-center item-center w-85 auto">
          <h2 className="text-bold w-100 text-start text-dark">
            Share some basics about your place
            <span className="fs-20 block py-1 text-light text-grey">
              You'll add more details later, like bed types.
            </span>
          </h2>
        </div>
      </BasicInfoAboutPlaceContainer>
      <FooterHosting prev={"373646/location"} next={"373646/structure"} />
    </>
  );
}

const BasicInfoAboutPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* padding-bottom: 6rem; */
  h2 {
    font-size: 35px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
  .locationsearch {
    width: 100%;
    position: relative;

    .searchwrapper {
      width: 60%;
      position: relative;
      height: 60vh;
      .icon {
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .map {
      /* position: absolute;
      width: 100%;
      height: 100%;
      top: 0; */
      /* z-index: 30000; */
      height: 60vh;
    }
    select {
      width: 100%;
      border: none;
      outline: none;
      padding: 1.5rem 6rem;
      margin: 0 auto;
      border-radius: 40px;
      border: 2px solid rgba(0, 0, 0, 0.06);

      box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
      &:hover {
        border: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
`;

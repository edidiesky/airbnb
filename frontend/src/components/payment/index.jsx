import React, { useEffect } from "react";
import SingleLeftIndex from "./left";
import RightIndex from "./right";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getSingleGigsDetails } from "../../Features";
import LoaderIndex from "../loaders";

export default function PaymentIndex() {
  const { id } = useParams();
  const dispatch = useDispatch();
  //
  return (
    <PaymentIndexContent>
      <>
        <div className="w-90 auto py-4 grid grid-auto grid-gap4">
          <SingleLeftIndex id={id} />
          <RightIndex />
        </div>
      </>
    </PaymentIndexContent>
  );
}

const PaymentIndexContent = styled.div`
  width: 100%;
  .grid-auto {
    display: grid;
    padding: 3rem;
    grid-template-columns: 1fr 30vw;
    grid-gap: 7rem;
    @media (min-width: 1500px) {
      grid-template-columns: 1.2fr 0.9fr;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      display: flex;
      padding: 3rem 0;
      flex-direction: column-reverse;
    }
  }
`;

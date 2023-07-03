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
      <div className="w-90 auto flex column">
        <h3 className="fs-40 w-85 auto">Confirm and pay</h3>
        <div className="w-90 auto py-4 grid grid-auto grid-gap4">
          <SingleLeftIndex id={id} />
          <RightIndex />
        </div>
      </div>
    </PaymentIndexContent>
  );
}

const PaymentIndexContent = styled.div`
  width: 100%;
  padding-top: 2rem;
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
  .btn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #fff !important;
  }
  .grid-auto {
    display: grid;
    padding: 3rem;
    grid-template-columns: 1fr 35vw;
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

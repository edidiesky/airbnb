import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export default function RightIndex() {
  const dispatch = useDispatch();
  return (
    <RightIndexContent className="w-100">
      <div className="Right flex gap-1 column">
      </div>
    </RightIndexContent>
  );
}

const RightIndexContent = styled.div`
  width: 100%;
  .Right {
    position: sticky;
    top: 5%;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Charts from "../common/charts";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import Widget from "../common/Widget";

export default function HostEarningIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <>
      <HostEarningIndexPlaceContainer className="">
        <div className="w-90 auto flex column gap-2">
          <Widget />
          <div className="w-100 flex column gap-1">
            <h3 className="fs-24 text-extra-bold">Popular Rooms</h3>
            <div className="w-100 wrapper">
              {Gigs?.slice(0, 4)?.map((x, index) => {
                return <Card x={x} type={'dashboard'} index={index} />;
              })}
            </div>
          </div>
          <div className="selectform column flex">
            <h3 className="fs-20 text-grey text-light">Select month</h3>
          </div>
          <h2 className="fs-50 text-extra-bold">
            $0.00
            <span className="block fs-16 text-grey text-light">
              Booked earnings for 2023
            </span>
          </h2>
          <Charts />
        </div>
      </HostEarningIndexPlaceContainer>
    </>
  );
}

const HostEarningIndexPlaceContainer = styled.div`
  width: 100%;
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
  }
  h3,
  h2 {
    font-family: "Montserrat", sans-serif;
  }
  padding: 2rem 0;
`;

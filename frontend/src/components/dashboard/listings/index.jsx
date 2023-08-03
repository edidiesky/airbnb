import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";

export default function HostLsitingsIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <>
      <HostLsitingsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto">
          <div className="w-90 auto flex column gap-2">
            <h3 className="fs-24 text-extra-bold">Popular Rooms</h3>
            <div className="w-100 wrapper">
              {Gigs?.map((x, index) => {
                return <Card x={x} type={"dashboard"} index={index} />;
              })}
            </div>
          </div>
        </div>
      </HostLsitingsIndexPlaceContainer>
    </>
  );
}

const HostLsitingsIndexPlaceContainer = styled.div`
  width: 100%;

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

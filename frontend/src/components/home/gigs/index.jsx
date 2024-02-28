import React from "react";
import styled from "styled-components";
import { GoBookmarkFill } from "react-icons/go";
import Card from "../../common/Card";
import { useSelector } from "react-redux";
import { projectdata } from "../../../data";
import CardSkeleton from "../../common/cardskeleton";

export default function GigsIndex({ loader }) {
  const { Gigs } = useSelector((store) => store.gigs);
  // console.log(loader)
  return (
    <GigsIndexContainer>
      <div className="w-90 auto flex item-center justify-center column">
        <div className="w-100 Heades flex item-start justify-space">
          {/* <Head text={"Recently Viewed & More"} /> */}
        </div>

        <div className="w-100 project flex item-center justify-center">
          <>
            {loader ? (
              <div className="w-100 wrapper">
                {projectdata.map((x) => {
                  return <CardSkeleton />;
                })}
              </div>
            ) : Gigs?.length === 0 ? (
              <div className="w-100 h-100 flex item-center justify-center column gap-2 no_listing">
                <span className="no_collection flex item-center justify-center">
                  <GoBookmarkFill fontSize={"30px"} />
                </span>
                <h4 className="fs-24 text-center text-bold">
                  Sorry no listings found for this category
                  <span className="block py-1 text-light text-center fs-14 text-grey">
                    Please check for any other category.. or you can create your
                    own listing
                  </span>
                </h4>
              </div>
            ) : (
              <div className="w-100 wrapper">
                {Gigs?.map((x, index) => {
                  return <Card x={x} loader={loader} index={index} />;
                })}
              </div>
            )}
          </>
        </div>
      </div>
    </GigsIndexContainer>
  );
}

const GigsIndexContainer = styled.div`
  width: 100%;
  position: relative;
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .no_collection {
    height: 5rem;
    width: 5rem;
    background-color: #ef391422;
    border-radius: 50%;

    svg {
      color: red;
    }
  }
  .no_listing {
    padding: 2rem;
  }
  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

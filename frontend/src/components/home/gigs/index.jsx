import React from "react";
import styled from "styled-components";
import { Slider } from "../../common";
import Card from "../../common/Card";
import { useSelector } from "react-redux";
import { projectdata } from "../../../data";



export default function GigsIndex() {
  // const { Gigs, gigsIsLoading } = useSelector((store) => store.gigs);
  return (
    <GigsIndexContainer>
      <div className="w-90 auto flex column">
        <div className="w-100 Heades flex item-start justify-space">
          {/* <Head text={"Recently Viewed & More"} /> */}
        </div>
        <div className="w-100 project">
          <div className="w-100 wrapper">
            {projectdata?.map((x, index) => {
              return <Card x={x} index={index} />;
            })}
          </div>
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

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
  }

`;

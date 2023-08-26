import styled from "styled-components";
import React from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import Rating from "../../common/svg/rating";

export default function HostReviewsIndex() {
  return (
    <>
      <HostReviewsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto top item-start justify-center flex column">
          <div className="top_center flex column gap-3 item-start">
            <h2
              style={{ fontWeight: "700" }}
              className="fs-35 text-start text-extra-bold"
            >
              Reviews
              <span className="fs-18 flex item-center" style={{gap:".2rem"}}>
                All listings <IoMdArrowDropdown fontSize={'20px'}/>
              </span>
            </h2>
            <div className="rating_content flex item-center column gap-1 justify-center">
              <Rating />
              <div className="w-85 auto flex item-center column justify-center" style={{gap:".3rem"}}>
                <h4 className="fs-20">Your first review will show up here</h4>
                <span className="fs-16 text-light text-grey">We’ll let you know when guests leave feedback.</span>
              </div>
            </div>
          </div>
        </div>
      </HostReviewsIndexPlaceContainer>
    </>
  );
}

const HostReviewsIndexPlaceContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  h2 {
    @media (max-width: 980px) {
      font-size: 30px;
    }
  }
  .rating_content {
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .top {
    width: 50%;
    @media (max-width: 980px) {
      width: 80%;
    }
    @media (max-width: 480px) {
      width: 95%;
    }
  }
`;

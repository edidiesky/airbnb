

import styled from "styled-components";
import React from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import Rating from "../../common/svg/rating";


export default function HostReservationsIndex() {
  return (
    <>
      <HostReservationsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto top item-start justify-center flex column">
          <div className="top_center flex column gap-3 item-start">
            <h2
              style={{ fontWeight: "700" }}
              className="fs-35 text-start text-extra-bold"
            >
              Reservations
              <span className="fs-18 flex item-center" style={{gap:".2rem"}}>
                All listings <IoMdArrowDropdown fontSize={'20px'}/>
              </span>
            </h2>
            <div className="rating_content flex item-center column gap-1 justify-center">
              <div className="w-85 auto flex item-center column justify-center" style={{gap:".3rem"}}>
                <h4 className="fs-20">You have no upcoming reservations</h4>
              </div>
            </div>
          </div>
        </div>
      </HostReservationsIndexPlaceContainer>
    </>
  );
}

const HostReservationsIndexPlaceContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  h2 {
    @media (max-width: 980px) {
      font-size: 30px;
    }
  }
  .rating_content {
    padding: 4rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .top {
    width: 95%;
  }
`;

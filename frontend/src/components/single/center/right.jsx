import React from "react";
import styled from "styled-components";
import Star from "../../common/svg/star";
import DateInput from "../../forms/Date";

const RightCenter = () => {
  return (
    <RightCard>
      <div className="flex w-100 wrapper column gap-2 item-start">
        <DateInput />
        <div className="top flex justify-space w-100">
          <h4 className="fs-24 text-dark text-bold">
            $97 <span className="text-grey text-light fs-16">night</span>
          </h4>
          {/* reviews */}
          <h5
            className="fs-16 flex item-center text-dark text-bold"
            style={{ gap: ".5rem" }}
          >
            <Star /> <span className="fs-16">4.92</span>{" "}
            <span
              className="fs-16 text-grey text-light"
              style={{ textDecoration: "underline" }}
            >
              390 reviews
            </span>
          </h5>
        </div>
        <div className="flex w-100 column gap-1">
          <div className="reserveBtn w-100 fs-16 text-white text-center">
            Reserve
          </div>
          <div className="fs-14 text-grey text-light text-center">
            You wont be charged yet
          </div>
        </div>
        <div className="flex bottom w-100 column gap-1">
          <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
            <span style={{ textDecoration: "underline" }}>$97 x 5 nights</span>
            <span className="text-dark">$485</span>
          </h4>{" "}
          <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
            <span style={{ textDecoration: "underline" }}>
              Airbnb service fee
            </span>
            <span className="text-dark">$485</span>
          </h4>
        </div>
        <h4 className="fs-18 text-bold text-dark w-100 justify-space flex item-center">
          <span>Total before taxes</span>
          <span className="text-dark">$485</span>
        </h4>
      </div>
    </RightCard>
  );
};

const RightCard = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  .wrapper {
    position: sticky;
    top: 5%;
  }

  .reserveBtn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #fff !important;
    color: #fff;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
  }
`;
export default RightCenter;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Star from "../../common/svg/star";

export default function RightIndex() {
  const dispatch = useDispatch();
  return (
    <RightIndexContent className="w-100">
      <div className="Right flex gap-1 column">
        <div className="w-100 border flex column gap-1">
          <div className="w-100 flex bottom item-start gap-1">
            <div className="image">
              {" "}
              <img
                src="https://a0.muscache.com/im/pictures/e49c73c0-1a87-4faf-bf9c-557b06b2ce17.jpg?aki_policy=large"
                alt=""
                className="w-100 h-100"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="w-100 column gap-1">
              <h4 className="fs-14 text-grey">
                <span className="block fs-12 text-grey text-bold">
                  Room in bed and breakfast
                </span>
                Quiet riad with lovely terrace (private room)
              </h4>
            </div>
          </div>
          <div className="top flex justify-space w-100">
            <h4 className="fs-24 text-dark text-bold">Price Details</h4>
          </div>
          <div className="flex bottom w-100 column gap-1">
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                $97 x 5 nights
              </span>
              <span className="text-dark">$485</span>
            </h4>{" "}
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>Cleaning fee</span>
              <span className="text-dark">$485</span>
            </h4>
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                Airbnb service fee
              </span>
              <span className="text-dark">$485</span>
            </h4>
          </div>
          <h4 className="fs-16 text-extra-bold family1 text-dark w-100 justify-space flex item-center">
            <span style={{ textDecoration: "underline" }}>Total (USD)</span>
            <span className="text-dark">$485</span>
          </h4>{" "}
        </div>
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
  .image {
    width: 50%;
    /* height: 10rem; */
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }

  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
`;

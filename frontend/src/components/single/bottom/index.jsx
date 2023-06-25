import React from "react";
import styled from "styled-components";
import Star from "../../common/svg/star";
import Footer from "./Footer";
import Reviews from "./reviews";

const BottomIndex = () => {
  return (
    // reviews
    <BottomWrapper className="w-100 flex column gap-3 py-2">
      <Reviews />
      <div className="flex w-100 item-center gap-2">
        <div className="flex item-center gap-1">
          <img
            src={
              "https://a0.muscache.com/im/pictures/user/0f0d2320-f6a7-4b4d-8828-234f31d988d8.jpg?im_w=240"
            }
            alt=""
            style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
          />
          <div className="flex column item-start gap-2">
            <h3 className="fs-24 text-dark text-bold">
              Hosted by Mega
              <span className="block fs-14 text-grey text-light">
                Joined in August 2015
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex wrapper item-start gap-2 w-100">
        <div className="left flex flex-1 column gap-2">
          <div className="flex item-center gap-1">
            <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
              <Star /> 2,884 Reviews
            </h5>{" "}
            <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
              <Star /> 2,884 Reviews
            </h5>{" "}
            <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
              <Star /> 2,884 Reviews
            </h5>
          </div>
          <h4 className="fs-18 text-grey text-light">
            I have been working for over 12 years in hospitality industry and
            now i have decided to open a small Eco friendly lodge in the central
            of Ubud where i can welcoming my guest and tr…
          </h4>
          <h4 className="flex column fs-18 text-dark gap-1">
            Mega is a Superhost
            <span className="block fs-18 text-grey text-light">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </span>
          </h4>
        </div>
        <div className="right flex flex-1 column gap-2">
          <div className="flex column gap-1">
            <h5 className="fs-18 flex item-center gap-1 text-dark text-light">
              Response rate: 100%
            </h5>{" "}
            <h5 className="fs-18 flex item-center gap-1 text-dark text-light">
              Response Time: 100%
            </h5>{" "}
          </div>
          <div className="flex item-start">
            <div className="contactBtn py-1 text-bold">Contact Host</div>
          </div>
        </div>
      </div>
    </BottomWrapper>
  );
};

const BottomWrapper= styled.div`
  .wrapper {
    @media (max-width:780px) {
      flex-direction: column;
    }
  }
`
export default BottomIndex;

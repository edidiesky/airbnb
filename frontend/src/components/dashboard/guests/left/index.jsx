import styled from "styled-components";
import React from "react";
import { BiCheck } from "react-icons/bi";

export default function HostGuestsLeftIndex() {
  return (
    <>
      <HotsGuestLeftStyles className="flex item-center justify-center">
        <div className="w-100 flex column gap-2">
          <div className="top_left shadow flex item-center gap-1">
            <div className="image_wrapper">
              <img
                src="/images/user_1.jpeg"
                alt=""
                className="avatar_profile"
              />
              <div className="image_gradient"></div>
            </div>
            <div className="flex item-start justify-space gap-1">
              {/* name pof teh booker */}
              <h3 className="fs-18 text-extra-bold">
                Edidiong Essien{" "}
                <span className="block fs-14 text-grey">#083etgffdbdn</span>
              </h3>
            </div>
          </div>
          <div className="top_left shadow flex item-start column gap-1">
            {/* title of the rooms */}
            <h3 className="fs-18 text-extra-bold">Cozy Cottage Retreat</h3>
            {/* status */}
            <div className="flex w-100 item-center justify-space">
              <span className="block fs-14 text-dark">#083etgffdbdn</span>
              <div className="flex">
                <div className="listing_status fs-12 text-white">Booked</div>
              </div>
            </div>
            {/* capacity */}
            <div className="flex w-100 item-center justify-space">
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">
                  Room Capacity
                </h5>
                <h4 className="fs-14 text-extra-bold">2-4 Persons</h4>
              </div>
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">
                  Type
                </h5>
                <h4 className="fs-14 text-extra-bold">Double Bed</h4>
              </div>
            </div>
            {/* date */}
            <div className="flex column">
              <h5 className="fs-12 text-extra-bold text-grey">Date Booking</h5>
              <h4 className="fs-14 text-extra-bold">24 December 2024</h4>
            </div>
            {/* facilities */}
            <div className="flex column gap-1">
              <h4 className="fs-14 text-extra-bold text-grey">Facilites</h4>
              <div
                style={{ flexWrap: "wrap" }}
                className="flex item-center gap-1 flex-wrap"
              >
                <h4
                  style={{ gap: ".4rem", width: "45%" }}
                  className="flex fs-12 item-center text-extra-bold text-dark"
                >
                  <BiCheck color="green" fontSize={"20px"} /> Room Full Ac
                </h4>
                <h4
                  style={{ gap: ".4rem", width: "45%" }}
                  className="flex fs-12 item-center text-extra-bold text-dark"
                >
                  <BiCheck color="green" fontSize={"20px"} /> LED TV
                </h4>
                <h4
                  style={{ gap: ".4rem", width: "45%" }}
                  className="flex fs-12 item-center text-extra-bold text-dark"
                >
                  <BiCheck color="green" fontSize={"20px"} /> Shower
                </h4>
                <h4
                  style={{ gap: ".4rem", width: "45%" }}
                  className="flex fs-12 item-center text-extra-bold text-dark"
                >
                  <BiCheck color="green" fontSize={"20px"} /> Game Console
                </h4>
              </div>
            </div>
          </div>
        </div>
      </HotsGuestLeftStyles>
    </>
  );
}

const HotsGuestLeftStyles = styled.div`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  h3,
  h4 {
    font-family: "Montserrat", sans-serif;
  }
  .listing_status {
    padding: 0.2rem 0.8rem;
    color: #fff;
    border-radius: 40px;
    background: var(--red);
    font-weight: 400;
  }
  .top_left {
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    .image_wrapper {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      border: 2px solid var(--red);
      &:hover {
        .image_gradient {
          opacity: 1;
        }
      }
      .image_gradient {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* transform: translateY(-100%); */
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s;
      }
      .avatar_profile {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* transform: translateY(-100%); */
        position: absolute;
      }
    }
  }
`;

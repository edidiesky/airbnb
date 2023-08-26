import React from "react";
import styled from "styled-components";
import Logo2 from "../common/svg/Logo12";
import { NavLink } from "react-router-dom";

const sidebarData = [
  {
    id: 1,
    title: "Listings",
    path: "",
  },
  {
    id: 2,
    title: "Reviews",
    path: "Reviews",
  },
  { id: 4, title: "Reservations", path: "orders" },

  { id: 5, title: "Earnings", path: "guests" },
  { id: 6, title: "Inbox", path: "Profile" },
];
export default function ListingHeader({ type }) {
  if (type === "dashboard") {
    return (
      <>
        <ListingHeaderContainer className="type">
          <div className="aboutCenter flex item-center gap-3 justify-center w-90 auto">
            <Logo2 />
            <div className="flex w-100 justify-center item-center">
              {sidebarData.map((x) => {
                return (
                  <NavLink
                    className="nav-link "
                    activeClassName="active"
                    to={`/dashboard/hosting/${x.path}`}
                    key={x.id}
                  >
                    <span className="span"> {x.title}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex top item-center gap-1 justify-end">
              <div
                style={{
                  width: "2.7rem",
                  height: "2.7rem",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.1)",
                  color: "#Fff",
                }}
                className="profile_wrapper flex item-center justify-center"
              >
                <div
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "50%",
                    background: "#000",
                    color: "#Fff",
                    border: "2px solid #fff",
                  }}
                  className="fs-16 text-white flex item-center justify-center"
                >
                  E
                </div>
              </div>
            </div>
          </div>
        </ListingHeaderContainer>
      </>
    );
  }
  return (
    <>
      <ListingHeaderContainer>
        <div className="aboutCenter flex item-center gap-3 justify-center w-85 auto">
          <Logo2 />
          <div className="flex top item-center gap-1 justify-end w-100">
            <div className="headBtn fs-14 text-dark text-bold">Questions</div>
            <div className="headBtn fs-14 text-dark text-bold">Save & Exit</div>
          </div>
        </div>
      </ListingHeaderContainer>
    </>
  );
}

const ListingHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  top: 0;
  position: fixed;
  z-index: 300;
  background-color: #fff;

  .nav-link {
        padding: 7px 14px;
        font-size: 14.5px;
        font-weight: 600;
        color: var(--dark-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        border-radius: 40px;
        position: relative;
        @media (max-width: 980px) {
          justify-content: center;
          /* border-radius: 50%; */
          padding: 0;
          /* padding: 13px 16px; */

          width: 3rem;
          height: 3rem;
          margin: 0.5rem auto;
          border-radius: 50%;
          svg {
            font-size: 14px;
          }
          span {
            display: none;
          }
        }
        &:hover {
          background-color: #f7f7f7;
          color: var(--dark-1);
          /* font-weight: 700; */
        }
        &.active {
          /* background-color: #000; */
          /* color: #fff; */
          background-color: #f7f7f7;
/* 
          &::after {
            position: absolute;
            right: -6%;
            content: "";
            width: 4px;
            height: 100%;
            background-color: var(--red);
            @media (max-width: 980px) {
              display: none;
            }
          } */

        }
      }
  &.type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .profile_wrapper {
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .top {
    @media (max-width: 580px) {
      justify-content: flex-start;
    }
  }
  .aboutCenter {
    @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      justify-content: flex-start;
    }
  }

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;

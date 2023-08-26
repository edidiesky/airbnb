import React from "react";
import styled from "styled-components";
import Logo2 from "../common/svg/Logo12";
export default function ListingHeader({ type }) {
  if (type === "dashboard") {
    return (
      <>
        <ListingHeaderContainer className="type">
          <div className="aboutCenter flex item-center gap-3 justify-center w-90 auto">
            <Logo2 />
            <div className="flex top item-center gap-1 justify-end w-100">
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
  &.type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .profile_wrapper {
    transition: all .5s;
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

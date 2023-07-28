import React from "react";
import styled from "styled-components";
import Logo2 from "../../common/svg/Logo12";
import { useSelector } from "react-redux";
import Profile from "../../common/svg/Profile";
import { NavLink } from "react-router-dom";
export default function Hostheader() {
  const { userInfo } = useSelector((store) => store.user);
  return (
    <>
      <HostheaderContainer>
        <div className="aboutCenter flex item-center gap-3 justify-space w-90 auto">
          <Logo2 />
          <div className="center fs-16 w-100 text-grey text-light flex item-center justify-center gap-1">
            <NavLink>Reviews</NavLink>
            <NavLink>Earnings</NavLink>
            <NavLink>Inbox</NavLink>
            <NavLink>Menu</NavLink>
          </div>
          <div className="flex top item-center gap-1 justify-end">
            {userInfo?.image ? (
              <div className="text-white fs-14">
                <img
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={userInfo?.image}
                  alt=""
                />
              </div>
            ) : !userInfo?.username ? (
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "var(--dark-1)",
                  color: "#fff",
                }}
                className="text-white fs-16 flex item-center justify-center uppercase"
              >
                {userInfo?.username.charAt(0)}
              </div>
            ) : (
              <div className="" style={{ width: "2rem", height: "2rem" }}>
                <Profile />
              </div>
            )}
          </div>
        </div>
      </HostheaderContainer>
    </>
  );
}

const HostheaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  top: 0;
  position: fixed;
  z-index: 300;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .center {
    a {
      padding: 0.6rem 1rem;
      border-radius: 40px;
      &:hover {
        background-color: #f7f7f7;
      }
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

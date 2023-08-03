import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import { FiKey } from "react-icons/fi";

import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness, MdSettings } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import Logo from "../../components/common/svg/Logo";
const SidebarWrapper = styled.div`
  width: 350px;
  background: #fff;

  height: 100vh;
  top: 0%;
  position: sticky;
  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.09);

  .fill {
    fill: #333;
  }
  @media (max-width: 1080px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }
  .fill {
    fill: #333;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 2rem;
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 1rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      .nav-link {
        padding: 13px 16px;
        /* font-size: 1rem; */
        font-size: 14px;
        font-weight: 600;
        margin: 0 auto;
        width: 100%;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        border-radius: 4px;

        &:hover {
          background-color: rgba(255, 219, 226, 0.337);
           color: rgb(249, 38, 77);
        }
        svg {
          font-size: 24px;
        }
        &.active {
          background-color: rgba(255, 219, 226, 0.337);
           color: rgb(249, 38, 77);
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "",
  },
  {
    id: 2,
    icon1: <FiKey />,
    title: "Rooms",
    path: "listings",
  },
  { id: 4, icon1: <BsCalendar3 />, title: "Bookings", path: "orders" },

  { id: 5, icon1: <HiUsers />, title: "Guests", path: "users" },
  { id: 6, icon1: <MdSettings />, title: "Settings", path: "Profile" },
];


export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <NavLink to={"/"} className="imageWrapper">
          {/* <Logo type={"type"} /> */}
          <Logo />
        </NavLink>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className="nav-link "
                activeClassName="active"
                to={`/dashboard/hosting/${x.path}`}
                key={x.id}
              >
                {x.icon1}
                {x.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}

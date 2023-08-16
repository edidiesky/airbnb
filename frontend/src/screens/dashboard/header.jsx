import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import { FiKey } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { MdDashboard, MdAddBusiness, MdSettings } from "react-icons/md";
import { FaPen, FaUsers } from "react-icons/fa";
import Heart from "../../components/common/svg/heart";
import Logo from "../../components/common/svg/Logo";

const HeaderWrapper = styled.div`
  padding: 1rem 0;
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 2000;
  color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h3 {
    font-family: "Montserrat", sans-serif;
  }
  .avatar {
    width: 3rem !important;
    height: 3rem !important;
  }
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width:780px) {
      display: none;
    }
    .nav-link {
      padding: 13px 16px;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      font-family: "Montserrat", sans-serif;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      border-radius: 4px;

      &:hover {
        background-color: rgba(255, 219, 226, 0.211);
      }
      svg {
        font-size: 18px;
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.156);
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
  { id: 7, icon1: <FaUsers />, title: "Conclerge", path: "" },

  { id: 5, icon1: <HiUsers />, title: "Guests", path: "guests" },
  { id: 6, icon1: <MdSettings />, title: "Settings", path: "Profile" },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="sidebarContainer w-90 auto flex item-center justify-space">
        <NavLink to={"/"} className="imageWrapper">
          {/* <Logo type={"type"} /> */}
          <Logo />
        </NavLink>
        <div className="left justify-center flex item-center">
          {/* <h3 className="fs-24 text-bold text">Dashboard</h3> */}
          <div className="list">
            {sidebarData.map((x) => {
              return (
                <NavLink
                  className="nav-link text-light"
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
        <div className="right flex item-center" style={{gap:".5rem"}}>
          <img src="/images/user_1.jpeg" alt="" className="avatar" />
          <h5 className="fs-14 text-light text-white">
            Edidiong Essien
            <span className="block fs-12">essienedidong@gmail.com</span>
          </h5>
        </div>
      </div>
    </HeaderWrapper>
  );
}

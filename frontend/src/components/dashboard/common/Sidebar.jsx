import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Logo from "../../common/svg/Logo12";
const SidebarWrapper = styled.div`
  width: 100%;
  background: var(--white);
  height: 100%;
  overflow: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  /* min-height: 100%; */

  /* @media (max-width: 480px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  } */
  .sidebar_top {
    @media (max-width: 1280px) {
      width: 7.7rem;
      height: 7.7rem;
      display: none;
    }
  }
  .profile_image {
    width: 10rem;
    background: #512da7;
    height: 10rem;
    font-size: 4rem;
    border-radius: 50%;
    @media (max-width: 1180px) {
      width: 7.7rem;
      height: 7.7rem;
      display: none;
    }
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    gap: 2rem;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    .imageWrapper {
      width: 100%;
      padding: 1.6rem 2rem;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      &.List1 {
        padding-top: 2rem;
        padding-bottom: 0;
        border-top: 1px solid #ccc;
        border-bottom: none;
      }
      h3 {
        color: #777;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
        margin: 1.5rem 0;
        padding: 1rem 0;
        text-align: start;
      }
      .nav-link {
        padding: 10px 30px;
        font-size: 16px;
        min-height: 70px;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: rgb(13, 13, 13);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3rem;
        position: relative;
        @media (max-width: 1180px) {
          padding: 10px 0;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        }

        &:hover {
          background: #f9f9f9;
        }
        svg {
          font-size: 22px;
        }
        &.active {
          /* position: absolute; */
          background: #dcb3ba11;
          color: var(--blue-1);
          &:after {
            position: absolute;
            background: #ff385c;
            width: 4px;
            height: 100%;
            left: 0;
            top: 0;
            content: "";
          }
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Listings",
    path: "",
  },
  // {
  //   id: 3,
  //   icon1: <MdAddBusiness />,
  //   title: "Reviews",
  //   path: "Reviews",
  // },
  {
    id: 4,
    icon1: <BsCollection />,
    title: "Reservations",
    path: "reservations",
  },
  // { id: 5, icon1: <HiUsers />, title: "Customers", path: "customer" },
  // { id: 6, icon1: <CgProfile />, title: "Profile", path: "profile" },
  { id: 6, icon1: <CgProfile />, title: "Orders", path: "orders" },
];

export const sidebarData2 = [
  { id: 2, icon1: <FiLogOut />, title: "Log Out", path: "" },
];
export default function Sidebar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    // dispatch(ClearBagData());
    // dispatch(ClearUserInfo());
    // dispatch(ClearauthInfo());
    window.location.reload();
  };
  return (
    <SidebarWrapper>
      <div className="sidebarContainer flex item-start py-4 column">
        <Link to={"/"} className="px-2">
          <Logo />
        </Link>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className={"nav-link family1 fs-18"}
                activeClassName="active"
                exact={true}
                to={`/dashboard/hosting/${x.path}`}
                key={x.id}
                end
              >
                {x.icon1}
                <span>{x.title}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}

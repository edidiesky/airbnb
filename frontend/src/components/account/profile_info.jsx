import React from "react";
import styled from "styled-components";
import Logo2 from "../common/svg/Logo12";
import { Link, NavLink } from "react-router-dom";

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
  { id: 4, title: "Reservations", path: "reservations" },

  { id: 5, title: "Earnings", path: "earning" },
  { id: 6, title: "Inbox", path: "Profile" },
];
export default function ProfileInfo({ type }) {
  return (
    <>
      <ProfileInfoContainer>
        <div className="ProfileInfoCenter flex w-85 auto">
          <h2 className="fs-35">Personal info</h2>
        </div>
      </ProfileInfoContainer>
    </>
  );
}

const ProfileInfoContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  padding-top: 7rem;
  .ProfileInfoCenter {
    width: 75%;
  }
  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;

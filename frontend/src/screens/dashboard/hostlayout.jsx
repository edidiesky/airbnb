import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import ListingHeader from "../../components/listing/ListingHeader";
import Sidebar from "../../components/dashboard/common/Sidebar";
const LayoutWrapper = styled.div`
  background: #fff;
  height: 100vh;
  overflow: auto;
  width: 100%;
  display: flex;

  .LayoutContainer {
    width: 100%;
    .OutletWrapper {
      overflow: auto;
      height: 100vh;
      align-items: flex-start;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      width: auto;
      @media (max-width: 580px) {
        height: 100vh;
      }
      .sidebar_wrapper {
        top: 0%;
        height: 100%;
        position: sticky;
        overflow: auto;
        width: 320px;

        @media (max-width: 980px) {
          width: 260px;
        }
      }
    }
  }
  h2 {
    @media (max-width: 1080px) {
      font-size: 2.8rem;
    }
    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }
`;

export default function HostLayout() {
  return (
    <LayoutWrapper>
      {/* <Header /> */}
      <div className="LayoutContainer">
        <div className="OutletWrapper flex">
          <div className="sidebar_wrapper">
            <Sidebar />
          </div>
          <div className="w-100 flex column">
            <ListingHeader type={"dashboard"} />
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

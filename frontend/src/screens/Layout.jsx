import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CartSidebar } from "../components/common";
import Sidebar from "../components/common/Sidebar";
import Message from "../components/loaders/Message";
import Footer from "../components/common/Footer";
export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <Outlet />
      {/* <Message/>
      <Sidebar/>
      <Footer /> */}
      <CartSidebar/>
      <Footer/>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
`;

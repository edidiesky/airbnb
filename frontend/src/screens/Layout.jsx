import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CartSidebar } from "../components/common";
import Sidebar from "../components/common/Sidebar";
import Message from "../components/loaders/Message";
import Footer from "../components/common/Footer";
import AuthModal from "../components/modals/AuthModal";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

export default function Layout({ type }) {
  const [height, setHeight] = useState(0);
  const { authmodal } = useSelector((store) => store.user);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);
  if (type === "hosting") {
    return (
      <LayoutContainer className="layout" style={{ height }}>
        <Outlet />
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <Outlet />

      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {authmodal && <AuthModal />}
      </AnimatePresence>
      {/* <Message/>
      <Sidebar/>
      <Footer /> */}
      <CartSidebar />
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  .hostingbottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 1rem;
    z-index: 32838;
    background-color: #fff;
    padding-bottom: 1rem;
  }
  .hostbtn {
    padding: .9rem 2rem;
    background-color: var(--dark-1);
    color: #fff;
    border-radius: 10px;

    &:hover {
      background-color: #e3dddd;
      color: var(--dark-1);
    }
    &.grey {
      background-color: transparent;
      color: var(--dark-1);
      text-decoration: underline;
    }
  }
`;

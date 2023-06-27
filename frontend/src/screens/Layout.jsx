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

export default function Layout() {
  const [height, setHeight] = useState(0);
  const { authmodal } = useSelector((store) => store.user);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

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
`;

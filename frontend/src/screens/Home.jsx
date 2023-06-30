import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Meta } from "../components/common";
import HomeIndex from "../components/home";
import styled from "styled-components";
import ProfileModal from "../components/modals/ProfileModal";
import { AnimatePresence } from "framer-motion";
// import Header from '../components/home/header';
// import { clearGigsAlert, getAllGigs } from '../Features';

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(clearGigsAlert())
  //   dispatch(getAllGigs())
  // }, []);
  // actions
  const { profilemodal } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  return (
    <>
      <Meta />
      <Header />
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {profilemodal && <ProfileModal />}
      </AnimatePresence>
      <HomeContainer>
        <HomeIndex />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 12rem;
  padding-bottom: 6rem;
`;

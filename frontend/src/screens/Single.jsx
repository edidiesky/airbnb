import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import SingleIndex from "../components/single";
// import Header from '../components/Single/header';
// import { clearGigsAlert, getAllGigs } from '../Features';

export default function Single() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(clearGigsAlert())
  //   dispatch(getAllGigs())
  // }, []);
  // actions
  const dispatch = useDispatch();
  return (
    <>
      <Meta />
      <Header type={'type'} />
      <SingleContainer>
        <SingleIndex />
      </SingleContainer>
    </>
  );
}

const SingleContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 8rem;
`;

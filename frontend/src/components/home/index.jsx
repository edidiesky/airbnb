import React, { useEffect } from "react";
import styled from "styled-components";
import GigsIndex from "./gigs";
export default function HomeIndex() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // clear provious fetch actions and then fetch new gigs
  //   dispatch(clearGigsAlert());
  //   dispatch(getAllGigs());
  // }, []);
  return (
    <HomeIndexContainer className="flex column ">
      <GigsIndex />
    </HomeIndexContainer>
  );
}

const HomeIndexContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

import React from "react";
import styled from "styled-components";
import TopIndex from "./top";
import CenterIndex from "./center";
import BottomIndex from "./bottom";
import Footer from "./bottom/Footer";

const SingleIndex = () => {
  return (
    <div className="w-100">
      <div className="w-85 auto flex column gap-4">
        <TopIndex />
        <CenterIndex />
        <BottomIndex />
      </div>
      <Footer/>
    </div>
  );
};

export default SingleIndex;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function FooterHosting({ tab1, tab2 }) {
  return (
    <>
      <div className="hostingbottom">
        <div className="w-85 auto flex item-center justify-space">
          <Link to={`/become-a-host/${tab2}`} className="hostbtn grey fs-20">
            Back
          </Link>
          <Link to={`/become-a-host/${tab1}`} className="hostbtn fs-20">
            Next
          </Link>
        </div>
      </div>
    </>
  );
}

const StartingContainer = styled.div``;

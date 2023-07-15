import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function FooterHosting({ next, prev, text }) {
  return (
    <>
      <div className="hostingbottom">
        <div className="w-85 auto flex item-center justify-space">
          {!text && (
            <Link to={`/become-a-host/${prev}`} className="hostbtn grey fs-18">
              Back
            </Link>
          )}

          <div className="flex-1 flex item-center justify-end">
            <Link to={`/become-a-host/${next}`} className="hostbtn fs-18">
              {text ? text : "Next"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const StartingContainer = styled.div``;

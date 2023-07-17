import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function FooterHosting({ next, prev, text, active }) {
  const navigate = useNavigate();
  const handleNextNavigation = () => {
    navigate(`/become-a-host/${next}`);
  };
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
            <button onClick={handleNextNavigation} disabled={!active} className={"hostbtn fs-18"}>
              {text ? text : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const StartingContainer = styled.div``;

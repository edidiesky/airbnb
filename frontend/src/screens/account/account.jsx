import React from "react";
import styled from "styled-components";
 const tabs = [
  {
    text:"Personal Info",
    desc:"Provide personal details and how we can reach you",
    icon:""
  }
 ]

export default function AccountIndex() {
  return (
    <>
      <AccountContainer>
        <div style={{ minHeight: "100vh" }} className="w-100">
          <div className="w-85 top auto flex column">
            <h2 className="fs-40">Account
            <span className="block fs-20">Edidiong Essien, <span style={{fontWeight:"300"}} className="text-light fs-18">essienedidiong1000@gmail.com</span> </span>
            </h2>
          </div>
        </div>
      </AccountContainer>
    </>
  );
}

const AccountContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
  .top {
    width: 70%;
  }
`;

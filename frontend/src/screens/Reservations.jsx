import React, { useEffect } from "react";
import styled from "styled-components";
import ReservationsIndex from "../components/reservations";
import { Header, Meta } from "../components/common";
const Reservations = () => {

  return (
    <>
      <Meta title={"Your lists . Reservations lists - Airbnb"} />
      <Header type={"type"} />
      <div className="w-100" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
        <ReservationsIndex />
      </div>
    </>
  );
};

export default Reservations;

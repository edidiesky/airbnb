import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../common";
import { useDispatch, useSelector } from "react-redux";
import Message from "../loaders/Message";
import { clearReservationsAlert } from "../../Features/reservations/reservationsSlice";
import { GetSingleBuyerReservations } from "../../Features/reservations/reservationsReducer";

const ReservationsIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleBuyerReservations());
  }, []);
  const { Reservations, showAlert, alertText } = useSelector(
    (store) => store.reservations
  );

  console.log(Reservations);
  const handleClearMessage = () => {
    dispatch(clearReservationsAlert());
  };
  return (
    <div
      className="w-85 auto flex column gap-2"
      style={{ paddingBottom: "3rem" }}
    >
      <Message
        showAlert={showAlert}
        alertText={alertText}
        handleClearAlert={handleClearMessage}
      />
      <h2 className="fs-40">Reservations lists</h2>

      <ReservationsWrapper className=" w-100 gap-2">
        {Reservations
          ? Reservations?.map((x) => {
              return <Card x={x} type={"reservations"} />;
            })
          : ""}
      </ReservationsWrapper>
    </div>
  );
};

const ReservationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  /* padding: 2rem 0; */
`;

export default ReservationsIndex;

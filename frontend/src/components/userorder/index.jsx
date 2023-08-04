import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Message from "../loaders/Message";
import { Table } from "../common/styles";
import TableCard from "../common/TableCard";
import { clearGigsAlert } from "../../Features/listing/listingSlice";
import { getAllGigs } from "../../Features/listing/listingReducer";

const UsreOrderIndex = () => {
  const dispatch = useDispatch();
  const { Reservations, showAlert, alertText } = useSelector(
    (store) => store.reservations
  );

  // console.log(Reservations);
  // const handleClearMessage = () => {
  //   dispatch(clearReservationsAlert());
  // };
  const { Gigs } = useSelector((store) => store.gigs);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <div
      className="w-85 auto flex column gap-2"
      style={{ paddingBottom: "3rem" }}
    >
      <Message
        showAlert={showAlert}
        alertText={alertText}
        // handleClearAlert={handleClearMessage}
      />
      <h2 className="fs-35">Transaction History</h2>

      {Gigs.length > 0 ? (
        <Table>
          <div className="TableContainer">
            <div className="flex column gap-2 justify-space w-100 flex-wrap">
              {/* <h3 className="fs-24 text-bold">Transaction History</h3> */}
            </div>
            <table className="tableWrapper">
              <tbody>
                {Gigs?.slice(0, 1)?.map((x) => {
                  return <TableCard type={"guests"} x={x} key={x?._id} />;
                })}
              </tbody>
            </table>
          </div>
          {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
        </Table>
      ) : (
        <h3 className="fs-24 w-100">
          My Orders
          <span
            className=" w-100
             block fs-16 w-90 text-light text-grey"
          >
            You have no orders
          </span>
        </h3>
      )}
    </div>
  );
};

const ReservationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  /* padding: 2rem 0; */
`;

export default UsreOrderIndex;

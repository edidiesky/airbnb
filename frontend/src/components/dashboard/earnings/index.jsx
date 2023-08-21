import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Charts from "../common/charts";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import Widget from "../common/Widget";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";

export default function HostEarningIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const { order, showAlert, alertText } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <>
      <HostEarningIndexPlaceContainer className="">
        <div className="w-100 auto flex column gap-2">
          <div className="flex column gap-1">
            <h3 className="fs-24 text-bold">Dashboard</h3>
          </div>
          <Widget />
          {/* <Charts /> */}
          {/* {Gigs?.length > 0 ? 
          (
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th>Rooms Name</th>
                      <th>Bed Type</th>
                      <th>Room Floor</th>
                      <th>Facilities</th>
                      <th>Rate</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.map((x) => {
                      return <TableCard type={"order"} x={x} key={x?._id} />;
                    })}
                  </tbody>
                </table>
              </div>
              {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
            {/* </Table>
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
          )} */} 
          {/* booking history */}
          <div className="grid wrapper">
            <div className="transaction_wrapper flex column gap-4">
              <h3 className="fs-20 text-extra-bold">Booking History</h3>
              <div className="flex column w-100 gap-1 py-2">
                {Gigs?.slice(0, 3)?.map((x) => {
                  return (
                    <div className="booking_card flex item-center gap-1 justify-space">
                      <div className="flex item-center gap-1">
                        <div
                          style={{ width: "5rem", borderRadius: "10px" }}
                          className="flex"
                        >
                          <img
                            style={{ borderRadius: "10px" }}
                            src={x?.listing_image[0]}
                            className="w-100"
                            alt=""
                          />
                        </div>
                        <div className="flex column" style={{ gap: ".4rem" }}>
                          <h4 className="text-bold fs-14">
                            Tente Glamping du Desert 3
                            <span className="block text-light fs-12">
                              03 August - 5 August
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="flex booking_card_right justify-end">
                        <div className="listing_status text-bold fs-10 text-dark">
                          pending
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="transaction_wrapper flex column gap-4">
              <h3 className="fs-20 text-extra-bold">Analytics</h3>
              <div className="flex column w-100 gap-1 py-2">
                <Charts />
              </div>
            </div>
          </div>
          {/* orders */}
         
        </div>
      </HostEarningIndexPlaceContainer>
    </>
  );
}

const HostEarningIndexPlaceContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .booking_card {
    display: flex;
    justify-content: space-between;
    @media (max-width: 680px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .booking_card_right {
    display: flex;
    justify-content: flex-end;
  }
  .listing_status {
    padding: 10px;
    flex: 1;
    color: #000;
    border-radius: 10px;
    background: #fff4f4;
    font-weight: 600;
  }
  .transaction_wrapper {
    padding: 30px;
    background: #fff;
    display: flex;
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    background-color: #fafafa;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  .wrapper_2 {
    display: grid;
    width: 100%;
    grid-template-columns: 0.7fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    place-items: start;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }

  padding: 2rem 0;
`;

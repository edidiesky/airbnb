import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Charts from "../common/charts";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import Widget from "../common/Widget";

export default function HostEarningIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
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
            <h2 className="fs-40 text-bold">Dashboard</h2>
          </div>
          <Widget />
          {/* <div className="w-100 flex column gap-1">
            <h3 className="fs-24 text-extra-bold">Popular Rooms</h3>
            <div className="w-100 wrapper">
              {Gigs?.slice(0, 4)?.map((x, index) => {
                return <Card x={x} type={'dashboard'} index={index} />;
              })}
            </div>
          </div> */}
          <Charts />
          <div className="grid wrapper">
            <div className="transaction_wrapper flex column gap-4">
              <h3 className="fs-24 text-bold">Booking History</h3>
              <div className="flex column w-100 gap-1 py-2">
                {Gigs?.slice(0, 3)?.map((x) => {
                  return (
                    <div className="booking_card flex item-center gap-1 justify-space">
                      <div className="flex item-center gap-1">
                        <div
                          style={{ width: "8rem", borderRadius: "10px" }}
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
                          <h3 className="text-bold fs-16">
                            Tente Glamping du Desert 3
                          </h3>
                          <div
                            className="flex item-center"
                            style={{ gap: ".4rem" }}
                          >
                            <div className="flex item-center gap-1">
                              <img
                                src="/images/user_1.jpeg"
                                alt=""
                                style={{
                                  width: "2.7rem",
                                  height: "2.7rem",
                                  borderRadius: "50%",
                                }}
                                className=""
                              />
                              <h4 className="fs-14 text-light text-dark">
                                Edidiong Essien
                              </h4>
                            </div>
                            <h4 className="fs-12 text-bold text-dark">
                              12 min ago
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flex booking_card_right justify-end">
                        <div className="listing_status text-bold fs-12 text-dark">
                          16 17 17 02
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="transaction_wrapper flex column gap-4">
              <h3 className="fs-24 text-bold">Booking History</h3>
              <div className="flex column w-100 gap-1 py-2"></div>
            </div>
          </div>
        </div>
      </HostEarningIndexPlaceContainer>
    </>
  );
}

const HostEarningIndexPlaceContainer = styled.div`
  width: 100%;
  font-family: "CustomFont_Medium", sans-serif;
  .booking_card {
    display: flex;
    justify-content: space-between;
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
    border: 1px solid rgba(0, 0, 0, 0.07);
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
  }

  padding: 2rem 0;
`;

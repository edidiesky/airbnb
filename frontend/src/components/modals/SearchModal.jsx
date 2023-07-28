import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { destinations } from "../../data/destinations";
export default function SearchModal() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <SearchModalContainer>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,.2)",
        }}
        className="search_backdrop absolute"
      ></div>
      <div
        style={{ zIndex: "10000" }}
        className="searchWrapper w-100 flex item-center justify-center"
      >
        <div className="search_container flex item-center gap-1">
          {/* region serach */}
          {tab === 0 && (
            <div className="region_search w-100">
              <div className="w-85 auto flex column gap-2">
                <h5 className="fs-14 text-bold">Search by region</h5>
                <div className="grid_wrapper w-85 grid">
                  {destinations.map((x, index) => {
                    return (
                      <div
                        key={index}
                        style={{ gap: ".6rem" }}
                        className="w-100 card flex column fs-16 text-light text-grey"
                      >
                        <div className="image_wrapper w-100 h-100">
                          <img src={x.image} alt="" className="w-100 h-100" />
                        </div>

                        {x.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div
            onClick={() => setTab(0)}
            className={
              tab === 0
                ? "where_wrapper flex column active"
                : "where_wrapper flex column"
            }
          >
            <h5 className="fs-12 text-bold">Where</h5>
            <input type="text" placeholder="Search destinations" />
          </div>
          {/* calendar start date modal */}
          {tab === 1 && (
            <div className="region_search w-100">
              <div className="w-85 auto flex column gap-2">
                <h5 className="fs-14 text-bold">Search by Start Date</h5>
              </div>
            </div>
          )}
          {/* start date */}
          <div
            onClick={() => setTab(1)}
            className={
              tab === 1
                ? "check_in flex-1 flex column active"
                : "check_in flex-1 flex column"
            }
          >
            <h5 className="fs-12 text-bold">Check In</h5>
            <h4 className="fs-14 text-light text-grey">Add Dates</h4>
          </div>
          {/* end date selection */}
          {/* calendar end date */}
          {tab === 2 && (
            <div className="region_search w-100">
              <div className="w-85 auto flex column gap-2">
                <h5 className="fs-14 text-bold">Search by End Date</h5>
              </div>
            </div>
          )}
          <div
            onClick={() => setTab(2)}
            className={
              tab === 2
                ? "check_in flex-1 flex column active"
                : "check_in flex-1 flex column"
            }
          >
            <h5 className="fs-12 text-bold">Check Out</h5>
            <h4 className="fs-14 text-light text-grey">Add Dates</h4>
          </div>
          {/* who guets */}
          {tab === 3 && (
            <div className="region_search w-100">
              <div className="w-85 auto flex column gap-2">
                <h5 className="fs-14 text-bold">Search by Start Date</h5>
              </div>
            </div>
          )}
          <div
            onClick={() => setTab(3)}
            className={
              tab === 3
                ? "where_wrapper gap-4 active flex item-center justify-space"
                : "where_wrapper gap-4 flex item-center justify-space"
            }
          >
            <div className="flex column">
              <h5 className="fs-12 text-bold">Check In</h5>
              <h4 className="fs-14 text-light text-grey">Add Dates</h4>
            </div>
            <div className="btn fs-16 text-white">Search</div>
          </div>
        </div>
      </div>
    </SearchModalContainer>
  );
}

const SearchModalContainer = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  .card {
    .image_wrapper {
      border-radius: 20px;
      transition: all 0.5s;
      img {
        border-radius: inherit;
      }
    }
    &:hover {
      .image_wrapper {
        border: 1px solid rgba(0, 0, 0, 0.3);
      }
    }
  }

  .searchWrapper {
    background-color: #fff;
    z-index: 2000;
    height: 8rem;
    width: 100vw;
    .search_container {
      /* width: 50%; */
      background-color: #ebebeb;
      padding: 0.1rem 0;
      border-radius: 100px;
      position: relative;
      .region_search {
        padding: 1.5rem 1rem;
        border-radius: 40px;
        position: absolute;
        background-color: #fff;
        top: 120%;
        box-shadow: 0 20px 46px rgba(0, 0, 0, 0.1);
        .grid_wrapper {
          width: 70%;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-gap: 1rem;
        }
      }
      .check_in {
        border-radius: 40px;
        background-color: #ebebeb;
        width: 15%;
        padding: 1rem;
        &:hover {
          background-color: #cbc8c88e;
        }

        &.active {
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
      }
      .where_wrapper {
        /* width: 40%; */
        border-radius: 40px;
        background-color: #ebebeb;
        padding: 0.8rem;
        padding-left: 2rem;
        .btn {
          padding: 0.8rem 2rem;
          background-image: linear-gradient(
            to right,
            #e61e4d 0%,
            #e31c5f 50%,
            #d70466 100%
          );
          border-radius: 40px;
          color: #fff;
        }
        &:hover {
          background-color: #cbc8c88e;
        }

        &.active {
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
        input {
          border: none;
          outline: none;
          font-family: inherit;
          font-size: 16px;
          color: var(--grey-1);
          background-color: transparent;
        }
      }
    }
  }
`;

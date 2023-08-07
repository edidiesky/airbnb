import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { destinations } from "../../../data/destinations";
import GuestDropdown from "./guestdropdown";
import RegionDropdown from "./regiondropdown";
import { Header } from "../../common";
import DateInput from "../../forms/Date";
import { motion } from "framer-motion";
import { searchIn } from "../../../utils/framer";
export default function SearchModal({ setSearch }) {
  const [tab, setTab] = useState(-1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(1);
  const [adults, setAdults] = useState(1);
  const handleSelect = (ranges) => {
    console.log(ranges);
    setTab(1)
    const { startDate, endDate } = ranges.selection;
        // Check if startDate and endDate are the same
        if (startDate.getTime() === endDate.getTime()) {
          // If they are the same, create a new endDate by adding one day to the selected startDate
          const newEndDate = new Date(startDate);
          newEndDate.setDate(newEndDate.getDate() + 1);
          setDateRange({
            ...ranges.selection,
            selection:{
              startDate,
              endDate: newEndDate,
              key: 'selection',
            }
          })
        } else {
          setDateRange(...ranges.selection,ranges.selection);
        }
    // const selectedStartDate = ranges.selection.startDate;
    // const selectedendDate = ranges.selection.endDate;

    // setDateRange({
    //   ...ranges.selection,
    //   selection: {
    //     startDate: selectedStartDate,
    //     endDate: selectedendDate,
    //   },
    // });

    // if (selectedStartDate) {
    //   setTab(1)
    // }
    
    // if (selectedendDate) {
    //   setTab(3)
    // }
  };
  let limit = adults + children;
  
  return (
    <SearchModalContainer
      variants={searchIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        onClick={() => setSearch(false)}
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,.2)",
        }}
        className="search_backdrop absolute"
      ></div>
      <div
        style={{ zIndex: "10000" }}
        className="searchWrapper w-100 flex column item-center justify-center"
      >
        <Header type={"search"} />
        <motion.div
          initial={{ opacity: 0 }} // Set the initial opacity of the child to 0
          animate={{ opacity: 1 }} // Set the target opacity to 1 with bouncing scale animation
          transition={{ delay: 1 }} //
          className="search_container flex item-center gap-1"
        >
          {/* region serach */}
          {tab === 0 && <RegionDropdown destinations={destinations} />}
          <div
            onClick={() => setTab(0)}
            className={
              tab === 0
                ? "where_wrapper flex column active"
                : "where_wrapper flex column"
            }
          >
            <h5 className="fs-10 text-bold">Where</h5>
            <input type="text" placeholder="Search destinations" />
          </div>
          {/* calendar start date modal */}
          {(tab === 1 || tab ===2) && (
            <div className="region_search w-100">
              <div className="w-85 auto flex column gap-1">
                <h5 className="fs-10 text-bold">Search by Start Date</h5>
                <DateInput type={'type'} dateRange={dateRange} handleSelect={handleSelect} />
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
            <h5 className="fs-10 text-bold">Check In</h5>
            <h4 className="fs-12 text-light text-grey">Add Dates</h4>
          </div>
          {/* end date selection */}
          {/* calendar end date */}
   
          <div
          // onClick={() => setTab(2)}
            className={
              tab === 2
                ? "check_in flex-1 flex column active"
                : "check_in flex-1 flex column"
            }
          >
            <h5 className="fs-10 text-bold">Check Out</h5>
            <h4 className="fs-12 text-light text-grey">Add Dates</h4>
          </div>
          {/* who guets */}
          {tab === 3 && (
            <GuestDropdown
              adults={adults}
              setAdults={setAdults}
              setTab={setTab}
              setChildren={setChildren}
              children={children}
              setInfants={setInfants}
              infants={infants}
            />
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
              <h5 className="fs-10 text-bold">Check In</h5>
              <h4 className="fs-12 text-light text-grey">Add Dates</h4>
            </div>
            <div className="btn fs-12 text-white">Search</div>
          </div>
        </motion.div>
      </div>
    </SearchModalContainer>
  );
}

const SearchModalContainer = styled(motion.div)`
  z-index: 2000;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  transform-origin: top center;
  /* transform-origin: "top center", */
  .icons {
    width: 2.5rem;
    border-radius: 50%;
    height: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: transparent;
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  .btnwrapper {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .guest_search {
    padding: 1.5rem 1rem;
    border-radius: 20px;
    position: absolute;
    background-color: #fff;
    top: 100%;
    box-shadow: 0 20px 46px rgba(0, 0, 0, 0.4);
    width: 45%;
    right: 0;
    @media (max-width: 780px) {
      width: 60%;
    }
  }
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
    padding: 1rem 0;
    width: 100vw;
    .search_container {
      width: 60%;
      background-color: #ebebeb;
      padding: 0.1rem 0;
      border-radius: 100px;
      position: relative;
      margin-top: 4rem;
      @media (max-width:1180px) {
        width: 90%;
      }
      .region_search {
        padding: 1.5rem 1rem;
        border-radius: 20px;
        position: absolute;
        background-color: #fff;
        top: 120%;
        width: 100%;
        box-shadow: 0 20px 46px rgba(0, 0, 0, 0.2);
        &.search_1 {
          width: 70%;
        }
        .grid_wrapper {
          width: 100%;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.2);
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
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.2);
          background-color: #fff;
        }
        input {
          border: none;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          color: var(--grey-1);
          background-color: transparent;
        }
      }
    }
  }
`;

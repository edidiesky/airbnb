import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { HiSearch } from "react-icons/hi";
import Logo from "./svg/Logo";
import { Link, useNavigate } from "react-router-dom";
import Bar from "./svg/Bar";
import Profile from "./svg/Profile";
import World from "./svg/World";
import { AnimatePresence, motion } from "framer-motion";
import SliderIndex from "./Slider";
import { categorydata } from "../../data/category";
import { useDispatch, useSelector } from "react-redux";
import { onAuthModal } from "../../Features/user/userSlice";
import { options2 } from "../../utils/carousel";
import Logo2 from "./svg/Logo12";
import Filter from "./svg/filter";
import { getLsitingType } from "../../Features/listing/listingSlice";
import { getAllGigs } from "../../Features/listing/listingReducer";
import Dropdown from "./Dropdown";
import { BiChevronLeft } from "react-icons/bi";

export default function ListingHeader({
  type,
  loader,
  setSearch,
  adults,
  infants,
  children,
  path,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((store) => store.user);
  const {
    startDate,
    endDate,
    location,
    listing_children,
    listing_infants,
    listing_adults,
  } = useSelector((store) => store.gigs);

  let limit = listing_adults + listing_children;

  let [searchParams, setSearchParams] = useSearchParams();
  const typevalue = searchParams.get("type");
  // console.log(startDate);
  const [tab, setTab] = useState(0);
  const handleListingType = (tab, type) => {
    setTab(tab);
    setSearchParams((type = { type }));
  };
  useEffect(() => {
    if (typevalue !== null) {
      dispatch(getLsitingType(typevalue));
    }
  }, [typevalue]);

  const [drop, setDrop] = useState(false);

  const handleSearch = () => {
    if (
      location &&
      startDate === "Invalid date" &&
      endDate === "Invalid date" &&
      !limit
    ) {
      navigate({
        pathname: "/",
        search: `?listing_country=${location}`,
      });
      dispatch(getAllGigs());
    } else if (
      location &&
      startDate !== "Invalid date" &&
      endDate !== "Invalid date" &&
      !limit
    ) {
      navigate({
        pathname: "/",
        search: `?listing_country=${location}
        &listing_startDate=${startDate}
      &listing_endDate=${endDate}
        `,
      });
      dispatch(getAllGigs());
    } else if (
      location &&
      startDate !== "Invalid date" &&
      endDate !== "Invalid date" &&
      limit
    ) {
      navigate({
        pathname: "/",
        search: `?listing_country=${location}
        &listing_startDate=${startDate}
      &listing_endDate=${endDate}
      &limit=${limit}
        `,
      });
      dispatch(getAllGigs());
    } else if (
      !location &&
      startDate === "Invalid date" &&
      endDate === "Invalid date" &&
      limit
    ) {
      navigate({
        pathname: "/",
        search: `?limit=${limit}`,
      });
      dispatch(getAllGigs());
    } else if (
      location ||
      limit ||
      (startDate === "Invalid date" && endDate === "Invalid date")
    ) {
      navigate({
        pathname: "/",
        search: `?listing_country=${location}
      &limit=${limit}
        `,
      });
      dispatch(getAllGigs());
    }
  };

  const handleCreateListingSteps = () => {
    if (userInfo) {
      navigate("/become-a-host/overview");
    } else {
      dispatch(onAuthModal());
    }
  };

  const HeaderBottomLoader =()=> {
     return (
       <div
         className={
              "w-100 HeaderBottom flex w-100 active"
         }
       >
         <div className="w-90 auto  bottomWrapper item-center justify-space">
           <div className="w-100 listing_icons hidden">
             <SliderIndex options={options2}>
               {categorydata.map((x, index) => {
                 return (
                   <div
                     style={{ margin: "0 10px", gap: ".6rem" }}
                     className=" flex-1 flex item-center justify-center column"
                   >
                     <Skeleton width={25} height={25} circle />
                     <Skeleton width={60} height={15} />
                   </div>
                 ) 
               })}
             </SliderIndex>
           </div>
         </div>
       </div>
     );
  }

  // headertop
  const HeaderTop = () => {
    return (
      <div
        className={
          type === "search"
            ? "w-100 headerTop flex w-100 active"
            : "w-100 headerTop flex w-100 "
        }
      >
        <div className="flex w-90 auto headertop1 flex-1 item-center justify-end">
          {type !== "Home" && (
            <Link
              to={`/${path}`}
              className="fs-16 text-bold gap-1 w-85 auto flex item-center"
            >
              <BiChevronLeft fontSize={"20px"} /> {type}
            </Link>
          )}

          {type === "Home" && (
            <div className="w-100">
              <div className="center justify-space w-100 flex item-center gap-1">
                <div className="flex item-center gap-2 ">
                  <HiSearch color="#000" fontSize={"20px"} />
                  <div className="fs-14 text-dark text-extra-bold">
                    Anywhere
                    <span
                      style={{ gap: ".2rem" }}
                      className="text-light fs-12 text-grey flex item-center"
                    >
                      {/* {startDate !== undefined
                    ? startDate - endDate
                    : startDate - endDate}{" "} */}
                      <span>Add week</span> <span> . </span>{" "}
                      <span>Add guests</span>
                    </span>
                  </div>
                </div>
                <div className="icons flex item-center justify-center">
                  <Filter />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={
            type
              ? "headertop2 w-90 auto flex item-center justify-space gap-2 "
              : "w-90 auto  headertop2 flex item-center justify-space gap-2"
          }
        >
          <Link to={"/"} className="logo1">
            <Logo />
          </Link>{" "}
          <Link to={"/"} className="logo2">
            <Logo2 />
          </Link>
          {/* search */}
          {/* {type === 'search' && (
            <div className="flex item-center justify-center">
              <h4 className="fs-18 text-light text-center">Stays</h4>
            </div>
          )} */}
          {type === "Home" && (
            <div
              onClick={() => setSearch(true)}
              className="flex item-center justify-end"
            >
              <div className="center flex item-center gap-1">
                <div className="fs-13  text-grey text-extra-bold">
                  {location ? location : "Location"}
                </div>
                <div className="left1 fs-13  text-grey text-extra-bold">
                  {startDate === "Invalid date" &&
                  endDate === "Invalid date" ? (
                    "Add Date"
                  ) : (
                    <span>
                      {startDate} - {endDate}
                    </span>
                  )}
                </div>
                <div
                  style={{ gap: ".4rem" }}
                  className="flex item-center justify-center fs-13  text-grey text-extra-bold"
                >
                  {limit ? <span>{limit} Guests</span> : " Add guests"}
                  <div
                    onClick={handleSearch}
                    className="icon flex item-center back-red justify-center"
                  >
                    <HiSearch color="#fff" fontSize={"18px"} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="right flex item-center">
            <div
              onClick={handleCreateListingSteps}
              className="fs-14 text text-bold text-grey"
            >
              Airbnb your home
            </div>
            <div className="icon1 flex item-center justify-center text-dark">
              <World />
            </div>
            <div
              onClick={() => setDrop(!drop)}
              style={{ gap: ".5rem" }}
              className="center2 flex item-center"
            >
              <Bar />
              {userInfo?.image ? (
                <div className="text-white flex fs-13">
                  <img
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={userInfo?.image}
                    alt=""
                  />
                </div>
              ) : userInfo?.firstname ? (
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "var(--dark-1)",
                    color: "#fff",
                  }}
                  className="text-white fs-13 flex item-center justify-center uppercase"
                >
                  {userInfo?.firstname.charAt(0)}
                </div>
              ) : (
                <div className="" style={{ width: "2rem", height: "2rem" }}>
                  <Profile />
                </div>
              )}
              {drop && (
                <div
                  onClick={() => setDrop(false)}
                  className="backdrop_dropdown absolute"
                  style={{
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    zIndex: "-1",
                    left: 0,
                    right: 0,
                    top: 0,
                  }}
                ></div>
              )}
              <Dropdown setDrop={setDrop} drop={drop} type={type} />
              {/* 
              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {drop && <Dropdown setDrop={setDrop} drop={drop} type={type} />}
              </AnimatePresence> */}
              {/* <Dropdown /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HeaderBottom = () => {
    return (
      <div
        className={
           "w-100 HeaderBottom flex w-100 "
        }
      >
        <div className="w-90 auto  bottomWrapper item-center justify-space">
          <div className="w-100 listing_icons hidden">
            <SliderIndex options={options2}>
              {categorydata.map((x, index) => {
                return (
                  <div
                    onClick={() => handleListingType(index, x.text)}
                    className={
                      tab === index
                        ? "flex column text-bold imagewrapper item-center fs-13 text-dark active"
                        : "flex column text-bold imagewrapper item-center fs-13 text-dark"
                    }
                    style={{
                      width: "5rem",
                      height: "5rem",
                      gap: ".4rem",
                      fontSize: "13px",
                    }}
                    key={index}
                  >
                    <img
                      src={x.image}
                      alt=""
                      className="image"
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    />
                    {x.text}
                  </div>
                )
              })}
            </SliderIndex>
          </div>
          {/* <div className="fiterWrapper flex item-center justify-end">
            <div className="fs-12 text-bold fiterIcon gap-1 text-dark flex item-center justify-center">
              <Filter />
              Fiters
            </div>
          </div>
          <div className="fiterWrapper flex item-center justify-end">
            <div className="fs-12 text-bold fiterIcon gap-1 text-dark flex item-center justify-center">
              Display before total taxes
              <div className="rightIcons">
                <div className="icons"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTop />
      {type === "Home" && <HeaderBottom />}
      {
        loader && <HeaderBottomLoader/>
      }
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 700;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  .backdrop_dropdown {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .bottomWrapper {
    /* grid-template-columns: 1fr 50px 270px; */
    grid-gap: 2rem;
    padding-top: 0.6rem;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
    }
  }
  .rightIcons {
    padding-left: 1.6rem;
    .icons {
      width: 3rem;
      height: 1.6rem;
      border-radius: 40px;
      background-color: #bfbdbddb;
      position: relative;
      &::after {
        width: 50%;
        height: 80%;
        content: "";
        position: absolute;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        border-radius: inherit;
      }
    }
  }
  .fiterIcon {
    padding: 0.8rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 15px;
  }
  .listing_icons {
    margin-right: 10rem;
  }
  .fiterWrapper {
    /* width: 300px; */
    /* background-color: red; */
    @media (max-width: 1080px) {
      display: none;
    }
  }
  .icons {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.4s;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .airHome {
    @media (max-width: 980px) {
      font-size: 14px !important;
    }
  }

  .center {
    padding: 0.6rem 1.3rem !important;
    margin: 0 auto !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    border: 0.5px solid rgba(0, 0, 0, 0.1) !important;
  }
  .headertop1 {
    display: none;
    padding: 1rem 0;
    @media (max-width: 780px) {
      padding: 0.4rem 0;
    }
    .center {
      padding: 0.6rem 1.3rem !important;
      width: 90% !important;
      margin: 0 auto !important;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1) !important;
      border: 0.5px solid rgba(0, 0, 0, 0.08) !important;
      @media (max-width: 780px) {
        padding: 0.4rem 2rem !important ;
        border: none;
      }
    }
    @media (max-width: 780px) {
      display: flex;
    }
  }
  .headertop2 {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .logo2 {
    display: none;
    @media (max-width: 980px) {
      display: flex;
    }
  }
  .logo1 {
    @media (max-width: 980px) {
      display: none;
    }
  }
  .loaderIcon {
    gap: 0.7rem;
    padding: 0.6rem 0;
    .circle {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      animation: card-loading 1s infinite alternate;
    }
    .bar {
      width: 80%;
      margin: 0 auto;
      height: 0.8rem;
      border-radius: 3px;
      animation: card-loading 1.4s infinite alternate;
    }
    @keyframes card-loading {
      0% {
        background-color: #ebebeb;
      }
      100% {
        background-color: #d4dee2a1;
      }
    }
  }
  .dropdown {
    position: absolute;
    right: 3%;
    background-color: #fff;
    min-width: 240px;
    padding: 0.5rem 0;
    z-index: 200000;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    top: 120%;
    @media (min-width: 1807px) {
      right: 17%;
    }
    .li {
      padding: 0.7rem 1.3rem;
      cursor: pointer;
      border-radius: inherit;
      &:hover {
        background-color: #f7f7f7;
      }
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }
  }
  .imagewrapper {
    position: relative;
    cursor: pointer;
    justify-content: center;
    img {
      opacity: 0.5;
    }
    &.active {
      &::after {
        width: 50%;
        transition: all 0.3s;
        position: absolute;
        bottom: -0%;
        content: "";
        left: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: var(--grey-1);
        transform: translateX(-50%);
      }
    }
    &:hover {
      ::after {
        width: 70%;
      }
      img {
        opacity: 1;
      }
    }
    &::after {
      width: 0%;
      transition: all 0.3s;
      position: absolute;
      bottom: -0%;
      content: "";
      left: 50%;
      height: 2px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      transform: translateX(-50%);
    }
  }
  .left,
  .right {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .center {
    @media (max-width: 780px) {
      width: 100%;
    }
  }
  .image {
    filter: brightness(0.1);
  }
  .right {
    justify-content: flex-end;
  }
  .HeaderBottom {
    padding: 0.1rem 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);

    &.active {
      padding: 1.2rem 0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    }
  }
  .text {
    padding: 0.6rem 1rem;
    border-radius: 40px;
    &:hover {
      background-color: var(--grey-2);
    }
  }
  .left1 {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 0.8rem;
  }
  .center1 {
    padding: 0.3rem 1rem;
    border-radius: 40px;
    gap: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .center2 {
    border-radius: 40px;
    /* gap: 0.2rem; */
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.3rem 0.6rem;
    flex: 1;
    cursor: pointer;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }
  }
  .center {
    padding: 0.6rem 1.4rem;
    border-radius: 40px;
    position: relative;
  }
  .headerTop {
    padding: 0.7rem 0;
    &.active {
      padding: 1rem 0;
      border: none;
    }
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .owl-nav {
    position: absolute;
    top: 10%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    &.disabled {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.3);

      /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25); */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      color: #777;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

        color: #777;
      }
    }
    button.owl-prev {
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.3);
      /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 20px;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        color: #777;
      }
    }
    button.owl-prev {
      left: 0%;
    }
    button.owl-next {
      right: 3%;
    }
  }
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller_onboarding" },
];

export default function Header({ type, loader }) {
  const { userInfo } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dropin = {
    hidden: {
      top: "40%",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      top: "40%",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      top: "0%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const dropin2 = {
    hidden: {
      top: "80%",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      top: "80%",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      top: "0%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [drop, setDrop] = useState(false);
  const dispatch = useDispatch();
  // dropdown for
  const Dropdown = () => {
    return (
      <motion.ul
        variants={type ? dropin2 : dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className="dropdown shadow flex column"
        onClick={() => setDrop(!drop)}
      >
        {userInfo ? (
          <div className="">
            <li className="fs-14 text-bold text-dark">
              <Link className="w-100" to={"/reservations"}>
                Reservations
              </Link>
            </li>
          </div>
        ) : (
          <div className="">
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-14 text-bold"
            >
              Sign in
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-14 text-bold text-dark"
            >
              Sign up
            </li>
          </div>
        )}

        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/wishlists"}>
            Wishlists
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/favorites"}>
            Favorites
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/trips"}>
            Trips
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">Logout</li>
      </motion.ul>
    );
  };
  const handleCreateListingSteps = () => {
    if (userInfo) {
      navigate("/become-a-host/overview");
    } else {
      dispatch(onAuthModal());
    }
  };
  // headertop
  const HeaderTop = () => {
    return (
      <div className="w-100 headerTop flex w-100 ">
        <div className="flex w-90 auto headertop1 flex-1 item-center justify-end">
          <div className="center justify-space w-100 flex item-center gap-1">
            <div className="flex item-center gap-2 ">
              <HiSearch color="#000" fontSize={"20px"} />
              <div className="fs-14 text-dark text-bold">
                Anywhere
                <span
                  style={{ gap: ".3rem" }}
                  className="text-light fs-12 text-grey flex item-center"
                >
                  Any week <span> . </span> <span>Add guests</span>
                </span>
              </div>
            </div>
            <div className="icons flex item-center justify-center">
              <Filter />
            </div>
          </div>
        </div>
        <div
          className={
            type
              ? "headertop2 w-85 auto flex item-center justify-space gap-2 "
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
          {!type && (
            <div className="flex item-center justify-end">
              <div className="center shadow flex item-center gap-1">
                <div className="fs-14 text-grey text-bold">Anywhere</div>
                <div className="left1 fs-14 text-grey text-bold">Anyweek</div>
                <div
                  style={{ gap: ".4rem" }}
                  className="flex item-center justify-center fs-14 text-grey text-light"
                >
                  Add guests
                  <div className="icon flex item-center back-red justify-center">
                    <HiSearch color="#fff" fontSize={"18px"} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="right flex item-center gap-1">
            <div
              onClick={handleCreateListingSteps}
              className="fs-16 airHome text-light text text-grey"
            >
              Airbnb your home
            </div>
            <div className="icon1 flex item-center justify-center text-dark">
              <World />
            </div>
            <div
              onClick={() => setDrop(!drop)}
              className="center2 gap-1 flex item-center"
            >
              <Bar />
              {userInfo?.image ? (
                <div className="text-white fs-14">
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
              ) : userInfo?.username ? (
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "var(--dark-1)",
                    color: "#fff",
                  }}
                  className="text-white fs-14 flex item-center justify-center uppercase"
                >
                  {userInfo?.username.charAt(0)}
                </div>
              ) : (
                <div className="" style={{ width: "2rem", height: "2rem" }}>
                  <Profile />
                </div>
              )}

              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {drop && <Dropdown />}
              </AnimatePresence>
              {/* <Dropdown /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HeaderBottom = () => {
    return (
      <div className="w-100 HeaderBottom flex w-100 ">
        <div className="w-90 auto  bottomWrapper item-center justify-space">
          <div className="w-100 hidden">
            <SliderIndex options={options2}>
              {categorydata.map((x, index) => {
                return loader ? (
                  <div className="loaderIcon flex-1 flex item-center justify-center  column">
                    <div className="circle"></div>
                    <div className="bar"></div>
                  </div>
                ) : (
                  <div
                    className="flex column text-light imagewrapper item-center fs-12 text-dark"
                    style={{ width: "5rem", height: "5rem", gap: ".5rem" }}
                    key={index}
                  >
                    <img
                      src={x.image}
                      alt=""
                      className="image"
                      style={{
                        width: "1.7rem",
                        height: "1.7rem",
                        opacity: ".6",
                      }}
                    />
                    {x.text}
                  </div>
                );
              })}
            </SliderIndex>
          </div>
          <div className="fiterWrapper flex item-center justify-end">
            <div className="fs-12 fiterIcon gap-1 text-dark flex item-center justify-center">
              <Filter />
              Fiters
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTop />
      {!type && <HeaderBottom />}
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
  .bottomWrapper {
    display: grid;
    grid-template-columns: 1fr 8vw;
    grid-gap: 1rem;
  }
  .fiterIcon {
    padding: 0.9rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 15px;
  }
  .fiterWrapper {
    /* width: 300px; */
    /* background-color: red; */
  }
  .icons {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.4s;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .airHome {
    @media (max-width: 980px) {
      font-size: 14px !important;
    }
  }
  .headertop1 {
    display: none;

    .center {
      padding: 0.6rem 1.3rem !important;
      width: 90% !important;
      margin: 0 auto !important;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1) !important;
      border: 0.5px solid rgba(0, 0, 0, 0.08) !important;
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
    right: 2%;
    background-color: #fff;
    min-width: 230px;
    z-index: 200000;
    border-radius: 8px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 1rem 2rem;
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
    &:hover {
      ::after {
        width: 100%;
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
      background-color: var(--grey-1);
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
    padding: 0.3rem 0;
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
    padding: 0.3rem 0.8rem;
  }
  .center {
    padding: 0.6rem 1.4rem;
    border-radius: 40px;
    position: relative;
  }
  .headerTop {
    padding: 1.3rem 0;
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
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 18px;
      color: #777;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
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
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 18px;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      left: -2%;
    }
    button.owl-next {
      right: 1%;
    }
  }
`;

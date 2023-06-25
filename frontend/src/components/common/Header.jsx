import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import Logo from "./svg/Logo";
import Bar from "./svg/Bar";
import Profile from "./svg/Profile";
import World from "./svg/World";
import SliderIndex from "./Slider";
import { categorydata } from "../../data/category";

const options2 = {
  items: 10,
  stagePadding: 10,
  nav: true,
  dots: false,
  loop: true,
  margin: 20,
  width: "100%",
  slideBy: 10,
  responsive: {
    0: {
      items: 3,
    },
    460: {
      items: 5,
    },
    760: {
      items: 6,
    },
    1024: {
      items: 10,
    },
  },
};
const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller_onboarding" },
];

export default function Header({ type }) {
  const HeaderTop = () => {
    return (
      <div className="w-100 headerTop flex w-100 ">
        <div className="w-90 auto flex item-center justify-space gap-2">
          <div className="flex-1 left">
            <Logo />
          </div>
          {/* search */}
          <div className=" item-center justify-center">
            <div className="center shadow flex item-center gap-2">
              <div className="left1 fs-14 family1 text-dark">Anywhere</div>
              <div className="left1 fs-14 family1 text-dark">Anyweek</div>
              <div className="flex item-center gap-1 fs-14 family1 text-grey">
                Add guests
                <div className="icon flex item-center back-red justify-center">
                  <HiSearch color="#fff" fontSize={"18px"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 right flex item-center gap-1">
            <h5 className="fs-14 family1 text text-grey">Airbnb your home</h5>
            <div className="icon1 flex item-center justify-center back-grey">
              <World />
            </div>
            <div className="center flex shadow item-center gap-1">
              <Bar />
              <div className="" style={{ width: "2rem", height: "2rem" }}>
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HeaderBottom = () => {
    return (
      <div className="w-100 HeaderBottom flex w-100 ">
        <div className="w-90 auto flex item-center justify-space gap-2">
          <SliderIndex options={options2}>
            {categorydata.map((x,index) => {
              return (
                <div
                  className="flex column family1 imagewrapper item-center fs-12 text-grey"
                  style={{ width: "5rem", height: "5rem",gap:".5rem" }}
                  key={index}
                >
                  <img
                    src={x.image}
                    alt=""
                    className="image"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  {x.text}
                </div>
              );
            })}
          </SliderIndex>
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTop />
      <HeaderBottom />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
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
  .left,.right {
    @media (max-width:780px) {
      display: none;
    }
  }
  .center {
    @media (max-width:780px) {
      width: 100%;
    }
  }
  .image {
    filter: brightnbess(100%);
  }
  .right {
    justify-content: flex-end;
  }
  .HeaderBottom {
    padding: .4rem 0;
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
    padding-right: 0.8rem;
  }
  .center {
    padding: 0.4rem 1.6rem;
    border-radius: 40px;
  }
  .headerTop {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .owl-nav {
    position: absolute;
    top: -10%;
    width: 100%;
    /* transform: translateY(40%); */
    z-index: 10;
    background-color: #fff;
    &.disabled {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 24px;
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
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 24px;
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
      right: 2%;
    }
  }
`;

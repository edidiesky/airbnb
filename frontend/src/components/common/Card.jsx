import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight, BiHeart, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import SliderIndex from "./Slider";

const options2 = {
  items: 1,
  nav: true,
  dots: true,
  margin: 10,
  navText: ["<", ">"],
  width: "100%",
  slideBy: 1,
  responsive: {
    1024: {
      items: 1,
    },
  },
};
const CardLoading = () => {
  return (
    <CardLoadingContent className="w-100 flex column gap-1 back-white">
      <div className="top w-100"></div>
      <div className="center w-90 auto flex gap-1 item-center">
        <div className="topCenter skeleton"></div>
        <div className="bottomCenter skeleton"></div>
      </div>
      <div
        className="w-90 auto flex column item-start"
        style={{ gap: ".5rem" }}
      >
        <div className="w-100 h-6 duration1 skeleton"></div>
        <div className="w-50 h-6 duration2 skeleton"></div>
      </div>
    </CardLoadingContent>
  );
};

export default function Card({ x, index, type }) {
  // const { gigsIsError, gigsIsLoading } = useSelector((store) => store.gigs);

  const gigsIsLoading = false;
  return (
    <>
      {gigsIsLoading ? (
        <CardLoading />
      ) : (
        <CardContent>
          <div className="w-100 cards flex gap-1 column" key={x?.id}>
            <SliderIndex options={options2}>
              {x?.image?.map((x) => {
                return (
                  <div className="w-100 card">
                    <img src={x} alt="" className="w-100" />
                    <div className="backdrop"></div>
                  </div>
                );
              })}
            </SliderIndex>
            <div className="flex column">
              <h4 className="fs-14 text-dark family1">{x.title}</h4>
              <h4 className="fs-12 text-grey family1 text-light">
                {x.distance} kilometers away
              </h4>
              <h4 className="fs-12 text-grey text-light family1">{x.date}</h4>
            </div>
            <h4 className="fs-14 text-dark family1">${x.price}</h4>
          </div>
        </CardContent>
      )}
    </>
  );
}

const CardContent = styled.div`
  width: 100%;
  overflow: hidden;
  &:hover {
    .desc {
      color: var(--green);
    }
  }

  .px-2 {
    padding: 0.8rem 1.6rem;
  }

  .bottom {
    padding: 1rem 1.5rem;
    background-color: #fff;
  }
  .cards {
    &:hover .owl-nav {
      opacity: 1;
      visibility: visible;
    }
  }
  .text-secondary {
    color: var(--yellow);
  }
  .card {
    min-height: 18rem;
    position: relative;
    border-radius: 10px;
    width: 100%;
    &:hover + .owl-nav {
      opacity: 1;
      visibility: visible;
    }
    /* overflow: hidden; */
    .icon {
      position: absolute;
      width: 2rem;
      background-color: #fff;
      height: 2rem;
      top: 50%;
      border-radius: 50%;
      display: grid;
      place-items: center;
      transition: all 0.4s;
      &.left {
        left: -20%;
      }
      &.right {
        right: -20%;
      }

      svg {
        width: 50%;
        height: 50%;
        color: #333;
      }
    }
    &:hover {
      .icon {
        &.left {
          left: -8px;
        }
        &.right {
          right: -8px;
        }
      }
      .desc {
        color: var(--yellow);
      }
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .backdrop {
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 18rem;
      border-radius: 10px;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .owl-dots {
    position: absolute;
    bottom: 10%;
    width: 100%;
    z-index: 30010;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.6rem;
    button.owl-dot {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      background-color: var(--grey-2) !important;
      border: none !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      &.active {
        background: #777;
      }
      span {
        width: 100%;
        height: 100%;
      }
    }
  }
  .owl-nav {
    position: absolute;
    top: 40%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
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
      width: 30px !important;
      height: 30px !important;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 15px !important;
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
      width: 30px !important;
      height: 30px !important;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 15px !important;
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
      left: 5% !important;
    }
    button.owl-next {
      right: 5% !important;
    }
  }
`;

const CardLoadingContent = styled.div`
  min-height: 35rem;
  min-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .skeleton {
    opacity: 0.7;
    animation: card-loading 1s infinite alternate;
  }
  .top {
    height: 20rem;
    opacity: 0.4;
    animation: card-loading 2s infinite alternate;
  }
  .bottomCenter {
    height: 1rem;
    flex: 0.3;
  }
  .h-6 {
    height: 1rem;
  }
  .topCenter {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .period1 {
    animation-duration: 1.5s;
  }
  .period2 {
    animation-duration: 2s;
  }
  @keyframes card-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 96%);
    }
  }
`;

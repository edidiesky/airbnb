import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
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
            {/* {x?.image?.map((x) => {
              return (
                <div className="w-100 card">
                  <img src={x} alt="" className="w-100" />
                  <div className="backdrop"></div>
                </div>
              );
            })} */}
            <div className="flex column" style={{ gap: ".2rem" }}>
              <h4 className="fs-18 text-dark">{x.title}</h4>
              <div className="flex column">
                <h4 className="fs-16 text-grey text-light">
                  {x.distance} kilometers away
                </h4>
                <h4 className="fs-16 text-grey text-light">{x.date}</h4>
              </div>
              <h4 className="fs-16 text-dark">
                ${x.price} <span className="text-light fs-16">night</span>
              </h4>
            </div>
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
    border-radius: 15px;
    width: 100%;
    /* &:hover + .owl-nav {
      opacity: 1;
      visibility: visible;
    } */
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
      border-radius: inherit;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
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

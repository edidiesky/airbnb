import React from "react";
import styled from "styled-components";

const images = [
  "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=960",
];

const Imagewrapper = () => {
  return (
    <Wrapper>
      <div className="w-100 imagewrapper">
        <img src={images[0]} alt="" className="image w-100 h-100" />
        <div className="gradient"></div>
      </div>
      <Wrapper>
        <div className="w-100 imagewrapper">
          <img src={images[0]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper">
          <img src={images[0]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper">
          <img src={images[0]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper">
          <img src={images[0]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  min-height: 25rem;
  @media (max-width:780px) {
    grid-template-columns: 1fr;
    height: 100%;
    min-height: 100%;
  }
  .imagewrapper {
    position: relative;
    height: 100%;
    &:hover {
      .gradient {
        opacity: 1;
        visibility: visible;
      }
    }
    .gradient {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  .image {
    border-radius: 10px;
    position: absolute;
    object-fit: cover;
  }
`;

export default Imagewrapper;

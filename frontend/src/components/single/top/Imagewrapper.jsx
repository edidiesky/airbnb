import React from "react";
import styled from "styled-components";

const images = [
  "https://a0.muscache.com/im/pictures/6943ce46-c64f-43b4-824b-5551735befcc.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/671f85e1-7de5-4541-80c4-07ead676d397.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/cb947a31-cadf-4665-82e1-c59587c978df.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/cb947a31-cadf-4665-82e1-c59587c978df.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e96790b9-e7c8-444a-94f9-1f7a2daeeddc.jpg?im_w=720",
];

const Imagewrapper = () => {
  return (
    <Wrapper>
      <div className="w-100 imagewrapper">
        <img src={images[0]} alt="" className="image w-100 h-100" />
        <div className="gradient"></div>
      </div>
      <Wrapper>
        <div className="w-100 imagewrapper images">
          <img src={images[1]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          <img src={images[2]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          <img src={images[3]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          <img src={images[4]} alt="" className="image w-100 h-100" />
          <div className="gradient"></div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  min-height: 25rem;

  .images {
    @media (max-width: 780px) {
      display: none;
    }
  }
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    height: 100%;
    min-height: 100%;
  }
  .imagewrapper {
    position: relative;
    height: 100%;
    @media (max-width: 780px) {
      min-height: 25rem;
    }
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

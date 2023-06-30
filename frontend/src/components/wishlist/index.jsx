import React from "react";
import styled from "styled-components";
import { Card } from "../common";
const wishdata = [
  {
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/4d713a1e-ab4c-4d70-905f-d24b4042189f.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/7f98dcc6-18f9-4cf6-8f83-798c20f1ba7f.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/fa670b4e-cb55-470b-a84c-ffc4b9422710.jpeg?im_w=720",
    ],
    title: "Sao Paulo, Brazil",
    distance: "90456",
    date: "july 1-8",
    price: "9113",
    hostinfo: {
      username: "Christi-anna",
      image: "/images/face_2.jfif",
    },
  },
  // rooms
  //  user1
  {
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-331330/original/629cfe98-225b-46e2-b36c-4fa2c49dc7d7.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-331330/original/e0efdb50-2bc4-4ba8-9b94-eca116b8b552.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-577553665717773242/original/50591ab1-2e70-4873-af32-9afc80150bf9.jpeg?im_w=720",
    ],
    title: "Clciedo,Monaco",
    distance: "90456",
    date: "july 1-8",
    price: "9113",
    hostinfo: {
      username: "Christi-anna",
      image: "/images/face_4.jfif",
    },
  },
];

const WishIndex = () => {
  return (
    <div className="w-85 auto flex column gap-2">
      <h2 className="fs-40">Wishlists</h2>
      {wishdata ? (
        <WishWrapper className=" w-100 gap-2">
          {wishdata.map((x) => {
            return <Card x={x} type={'wish'} />;
          })}
        </WishWrapper>
      ) : (
        <h3 className="fs-24">
          Create your first wishlist
          <span className="py-1 block fs-16 w-90 text-light text-grey">
            As you search, click the heart icon to save your favorite places and
            Experiences to a wishlist.
          </span>
        </h3>
      )}
    </div>
  );
};

const WishWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
`;

export default WishIndex;

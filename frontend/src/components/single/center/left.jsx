import React from "react";
import styled from "styled-components";
import Person from "../../common/svg/person";
import Location from "../../common/svg/Location";
import Date from "../../common/svg/Date";
import Kitchen from "../../common/svg/kitchen";
import Room from "../../common/svg/room";
import Pet from "../../common/svg/pet";
import Tv from "../../common/svg/tv";
import Fridge from "../../common/svg/fridge";
import Sound from "../../common/svg/sound";
import Carbon from "../../common/svg/carbon";
import Profile from "./profile";
import DateInput from "../../forms/Date";
const offerdata = [
  {
    image: <Kitchen />,
    text: "Kitchen",
  },
  {
    image: <Room />,
    text: "Dedicated workspace",
  },
  {
    image: <Pet />,
    text: "Pets allowed",
  },
  {
    image: <Tv />,
    text: "TV",
  },
  {
    image: <Fridge />,
    text: "Refrigerator",
  },
  {
    image: <Sound />,
    text: "Sound system",
  },
  {
    image: <Date />,
    text: "Long term stays allowed",
  },
  {
    image: <Carbon />,
    text: "Carbon Monoxide",
  },
];

const LeftCenter = () => {
  return (
    <div className="flex column gap-2">
      <h3 className=" text-dark bottom" style={{ fontSize: "24px" }}>
        Camper/RV hosted by Lanzarote Van Campers
        <span className="block fs-14 text-grey text-light">
          3 guests1 bedroom1 bed1.5 baths
        </span>
      </h3>
      <div className="flex item-center gap-2 bottom w-100">
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>{" "}
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>{" "}
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>
      </div>
      {/*  */}
      <ul className="flex bottom column gap-2">
        <li className="flex fs-18 text-dark item-center gap-1">
          <Person />
          <span className="text-dark">
            Lanzarote Van Campers is a Superhost
            <div className="block text-grey fs-14 text-light">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </div>
          </span>
        </li>
        <li className="flex fs-18 text-dark item-center gap-1">
          <Location />
          <span className="text-dark">
            Great location
            <div className="block text-grey fs-14 text-light">
              100% of recent guests gave the location a 5-star rating.
            </div>
          </span>
        </li>
        <li className="flex fs-16 text-dark item-center gap-1">
          <Date />
          <span className="text-dark">Great location</span>
        </li>
      </ul>
      {/* profile */}
      <Profile />
      {/* description */}
      <h4 className="fs-18 bottom text-dark text-light">
        Fully equipped large-volume camper van converted in 2021.
        <br />
        The vehicle, with capacity for 3 people, has a practical distribution:
        living room - kitchen with two sofas, extendable dining table for you to
        work and eat comfortably, TV with Netflix (we don't want you to miss
        your favourite series), as well as a large storage space (personal
        luggage, sports equipment, surfboards, folding bikes …).
      </h4>

      {/* special offers */}

      {/* special offers */}
    
      <div className="flex column gap-2 bottom w-100">
        <h3 className="fs-24 text-dark">What this place offers</h3>
        <ul
          className="grid w-100"
          style={{ gridTemplateColumns: "1fr 1fr", gridGap: "1.4rem" }}
        >
          {offerdata.map((x, index) => {
            return (
              <li
                key={index}
                className="fs-16 text-dark text-light flex item-center gap-1"
              >
                {/* <img src={x.image} style={{width:"2.5rem",height:"2.5rem"}} alt="" /> */}
                {x.image}
                {x.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftCenter;

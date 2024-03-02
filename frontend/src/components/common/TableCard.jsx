import React from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { GiSandsOfTime } from "react-icons/gi";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
export default function TableCard({ x, type }) {
  let startdate = moment(x?.startDate);
  startdate = startdate.format("MMMM Do YYYY");

  let enddate = moment(x?.endDate);
  enddate = enddate.format("MMMM Do YYYY");

  let reservationstartdate = moment(x?.startDate);
  reservationstartdate = reservationstartdate.format("MMMM Do YYYY");

  let reservationenddate = moment(x?.endDate);
  reservationenddate = reservationenddate.format("MMMM Do YYYY");

  if (type === "guests") {
    return (
      <>
        {/* <Delete type="users" /> */}
        <AnimatePresence
          initial="false"
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {/* {userAlert && <Delete type={"users"} />} */}
        </AnimatePresence>
        <tr key={x?._id}>
          <td>
            <div className="flex item-center gap-1">
              <div
                style={{ width: "6rem", borderRadius: "10px" }}
                className="flex"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={x?.listing_image[0]}
                  className="w-100"
                  alt=""
                />
              </div>
              <span className="fs-14 text-dark">
                {x?.listing_title}
                <span className="block fs-12 text-grey">{x?._id}</span>
              </span>
            </div>
          </td>
          <td>{x?.listing_type}</td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check In</h5>
              <span className="fs-14 text-dark">
                November 2023, 15th
                <span className="fs-10 block text-bold">9:00 pm</span>
              </span>
            </div>
          </td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check Out</h5>
              <span className="fs-14 text-dark">
                November 2023, 15th
                <span className="fs-10 block text-bold">9:00 pm</span>
              </span>
            </div>
          </td>
          <td>
            <span className="fs-14 text-light">${x?.listing_price} </span>
          </td>
        </tr>
      </>
    );
  }
  if (type === "order") {
    return (
      <>
        {/* <Delete type="users" /> */}
        <AnimatePresence
          initial="false"
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {/* {userAlert && <Delete type={"users"} />} */}
        </AnimatePresence>
        <tr key={x?._id}>
          {/* image */}
          <td>
            <div className="flex item-center gap-1">
              <div
                style={{ width: "4rem", borderRadius: "10px", height: "3rem" }}
                className="flex"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={x?.image[0]}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </td>
          {/* title */}
          {/* <td>
            <span className="fs-16 text-start text-dark">
              {x?.title.substring(0, 140)}
            </span>
          </td> */}
          {/* status */}
          <td>
            <div className="flex fs-14 item-center">
              <div
                className={x?.status === "Pending" ? "status active" : "status"}
              >
                {x?.status}
              </div>
            </div>
          </td>
          {/* paid */}
          <td>
            <div className="flex fs-14 item-center">
              <div className={x?.isPaid === false ? "status active" : "status"}>
                {x?.isPaid === true ? "Paid" : "Not paid"}
              </div>
            </div>
          </td>
          <td>
            <div className="flex column">
              <span className="fs-14 text-dark">{startdate}</span>
            </div>
          </td>
          <td>
            <div className="flex column">
              <span className="fs-14 text-dark">{enddate}</span>
            </div>
          </td>
          {/* occupants */}
          <td>
            <div className="flex column">
              <span className="fs-14 text-bold text-dark">
                <span className="text-light">Adults:</span>
                {x?.adults}
              </span>
              <span className="fs-14 text-bold text-dark">
                <span className="text-light">Children:</span>
                {x?.children}
              </span>
              <span className="fs-14 text-bold text-dark">
                <span className="text-light">Infants:</span>
                {x?.infants}
              </span>
            </div>
          </td>
          <td>
            <span className="fs-16 text-light">${x?.price}</span>
          </td>
        </tr>
      </>
    );
  }
  // seller Order
  if (type === "sellerorder") {
    return (
      <>
        <tr key={x?._id}>
          <td>
            <div style={{ gap: "7px" }} className="flex item-center">
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                }}
                className="flex relative detailsImageWrapper justify-center "
              >
                <div className="image h-100 w-100 absolute">
                  <img
                    src={x?.buyerId?.image}
                    alt=""
                    className="radius1 absolute w-100 h-100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <span className="fs-16 text-start text-bold">
                {x?.buyerId?.username}
                <span className="block fs-12 text-light text-grey">
                  {x?.buyerId?.email.substring(0, 24)}
                </span>
              </span>
            </div>
          </td>
          {/* location */}
          {/* <td>
            <div style={{ gap: "7px" }} className="flex item-center">
              <span className="fs-14 flex item-center text-start text-light">
                {x?.buyerId?.address?.country}
              </span>
            </div>
          </td> */}
          {/* image */}
          {/* <td>
            <div className="flex item-center gap-1">
              <div
                style={{ width: "4rem", borderRadius: "10px", height: "3rem" }}
                className="flex"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={x?.image[0]}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </td> */}
          {/* title */}
          <td>
            <span className="fs-14 text-start text-light text-dark">
              {x?.title.substring(0, 140)}
            </span>
          </td>
          {/* status */}
          <td>
            <div className="flex fs-12 text-bold item-center">
              <div
                className={x?.status === "Pending" ? "status active" : "status"}
              >
                {x?.status}
              </div>
            </div>
          </td>
          {/* paid */}
          <td>
            <div className="flex fs-12 text-bold item-center">
              <div className={x?.isPaid === false ? "status active" : "status"}>
                {x?.isPaid === true ? "Paid" : "Not paid"}
              </div>
            </div>
          </td>
          <td>
            <div className="flex column">
              <span className="fs-14 text-bold text-dark">{startdate}</span>
            </div>
          </td>
          <td>
            <div className="flex column">
              <span className="fs-14 text-bold text-dark">{enddate}</span>
            </div>
          </td>
          <td>
            <span className="fs-18 text-light">${x?.price}</span>
          </td>
        </tr>
      </>
    );
  }

  if (type === "reservations") {
    return (
      <>
        <tr key={x?._id}>
          <td>
            <div className="flex item-center gap-1">
              <div
                style={{ width: "4rem", borderRadius: "10px", height: "3rem" }}
                className="flex"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={x?.listing_Id?.listing_image[0]}
                  className="w-100"
                  alt=""
                />
              </div>
              <span className="fs-14">
                {x?.listing_Id?.listing_title.substring(0, 50)}
              </span>
            </div>
          </td>
          <td>
            <div style={{ gap: "7px" }} className="flex item-center">
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                }}
                className="flex relative detailsImageWrapper justify-center "
              >
                <div className="image h-100 w-100 absolute">
                  <img
                    src={x?.listing_host_Id?.image}
                    alt=""
                    className="radius1 absolute w-100 h-100"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <span className="fs-14 text-start text-bold">
                {x?.listing_host_Id?.username}
                <span className="block fs-12 text-grey">
                  {x?.listing_host_Id?.email}
                </span>
              </span>
            </div>
          </td>
          {/* status */}
          {/* bedroom */}
          <td>
            <span
              style={{ gap: ".1rem" }}
              className="fs-14 flex item-center text-light"
            >
              Progress
            </span>
          </td>
          <td>{reservationstartdate}</td>
          {/* baths */}
          <td>{reservationenddate}</td>
          {/* type */}
          <td>${x?.listing_Id?.listing_price}</td>
          {/* <td>
            <span className="text-light">
              {x?.listing_Id?.listing_location}, {x?.listing_Id?.listing_region}
            </span>
          </td> */}
        </tr>
      </>
    );
  }

  return (
    <>
      {/* <Delete type="users" /> */}
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {/* {userAlert && <Delete type={"users"} />} */}
      </AnimatePresence>
      <tr key={x?._id}>
        <td>
          <div className="flex item-center gap-1">
            <div
              style={{ width: "4rem", borderRadius: "10px", height: "3rem" }}
              className="flex"
            >
              <img
                style={{ borderRadius: "10px" }}
                src={x?.listing_image[0]}
                className="w-100"
                alt=""
              />
            </div>
            <span className="fs-14 family1">{x?.listing_title}</span>
          </div>
        </td>
        {/* todo */}
        {/* <td>
          <div className="flex item-start">
            <div className="headBtn text-dark">Finish</div>
          </div>
        </td> */}
        {/* status */}
        {/* bedroom */}
        <td>
          <span
            style={{ gap: ".5rem" }}
            className="fs-14 flex item-center text-light"
          >
            Progress
          </span>
        </td>
        <td>{x?.listing_bedrooms}</td>
        {/* baths */}
        <td>{x?.listing_bathrooms}</td>
        {/* beds */}
        <td>{x?.listing_beds}</td>
        {/* type */}
        <td>${x?.listing_price}</td>
        <td>
          <span className="text-light">
            {x?.listing_location}, {x?.listing_region}
          </span>
        </td>
      </tr>
    </>
  );
}

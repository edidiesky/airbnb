import React from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import moment from "moment";
// import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function TableCard({ x, type }) {
  const { userAlert } = useSelector((store) => store.user);
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // delete user function
  const handleDeleteUser = () => {
    // dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`/dashboard/users/${x?._id}`);
  };

  const facilitiesdata = [
    "Air Conditioner",
    "Fan",
    "Electricity",
    "LED TV",
    "Shower",
    "Bath Tub",
  ];
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
              <h4 className="fs-14 text-bold text-dark">
                {x?.listing_title}
                <span className="block fs-12 text-grey">{x?._id}</span>
              </h4>
            </div>
          </td>
          <td>{x?.listing_type}</td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check In</h5>
              <h4 className="fs-14 text-bold text-dark">
                November 2023, 15th
                <span className="fs-10 block text-bold">9:00 pm</span>
              </h4>
            </div>
          </td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check Out</h5>
              <h4 className="fs-14 text-bold text-dark">
                November 2023, 15th
                <span className="fs-10 block text-bold">9:00 pm</span>
              </h4>
            </div>
          </td>
          <td>
            <h4 className="fs-14 text-extra-bold">
              ${x?.listing_price}{" "}
              <span className="text-light fs-12">/night</span>
            </h4>
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
          <td>
            <div className="flex item-center gap-1">
              <div
                style={{ width: "11rem", borderRadius: "10px" }}
                className="flex"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={x?.image[0]}
                  className="w-100"
                  alt=""
                />
              </div>
              <h4 className="fs-16 text-bold text-dark">
                {x?.title}
                <span className="block fs-12 text-grey">{x?._id}</span>
              </h4>
            </div>
          </td>
          <td>{x?.status}</td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check In</h5>
              <h4 className="fs-14 text-bold text-dark">{x?.startDate}</h4>
            </div>
          </td>
          <td>
            <div className="flex column">
              <h5 className="fs-10 text-light text-grey">Check Out</h5>
              <h4 className="fs-14 text-bold text-dark">{x?.endDate}</h4>
            </div>
          </td>
          <td>
            <h4 className="fs-16 text-extra-bold">
              ${x?.price} <span className="text-light fs-12">/night</span>
            </h4>
          </td>
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
            {x?.listing_title}
          </div>
        </td>
        {/* todo */}
        <td>
          <div className="flex item-start">
            <div className="headBtn text-dark">Finish</div>
          </div>
        </td>
        {/* status */}
        {/* bedroom */}
        <td>
          <h4
            style={{ gap: ".5rem" }}
            className="fs-16 flex item-center text-light"
          >
            <GiSandsOfTime /> In progress
          </h4>
        </td>
        <td>{x?.listing_bedrooms}</td>
        {/* baths */}
        <td>{x?.listing_bathrooms}</td>
        {/* beds */}
        <td>{x?.listing_beds}</td>
        {/* type */}
        <td>${x?.listing_price}</td>
        <td>
          <h4 className="text-light">
            {x?.listing_location}, {x?.listing_region}
          </h4>
        </td>
      </tr>
    </>
  );
}

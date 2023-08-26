import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dropin1, dropin2 } from "../../utils/framer";
import { motion } from "framer-motion";

const Dropdown = ({ setDrop, drop, type }) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((store) => store.user);

  return (
    <motion.ul
      variants={type ? dropin2 : dropin1}
      initial="hidden"
      animate="visible"
      exit={"exit"}
      className="dropdown shadow flex column"
      onClick={() => setDrop(!drop)}
      // style={{ position: "absolute" }}
    >
      {userInfo ? (
        <div style={{ gap: ".2rem" }} className="flex column">
          <div className="">
            <li
              style={{ fontSize: "14px", fontWeight: "600" }}
              className="fs-14 text-light text-dark"
            >
              <Link className="w-100" to={"/reservations"}>
                Reservations
              </Link>
            </li>
            <li
              style={{ fontSize: "14px", fontWeight: "600" }}
              className="fs-14 text-light text-dark"
            >
              {" "}
              <Link className="w-100" to={"/wishlists"}>
                Wishlists
              </Link>
            </li>
            <li
              style={{ fontSize: "14px", fontWeight: "600" }}
              className="fs-14 text-light text-dark"
            >
              {" "}
              <Link className="w-100" to={"/order"}>
                Orders
              </Link>
            </li>
            <li
              style={{ fontSize: "14.5px", fontWeight: "600" }}
              className="fs-14 text-light text-dark"
            >
              {" "}
              <Link className="w-100" to={"/trips"}>
                Trips
              </Link>
            </li>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.1)",
              padding: ".3rem 0",
            }}
            className=""
          >
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "15px", fontWeight: "300" }}
              className="fs-14 text-light"
            >
              <Link className="w-100" to={"/dashboard/hosting"}>
                Manage Listings
              </Link>
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "15px", fontWeight: "300" }}
              className="fs-14 text-light text-dark"
            >
              Account
            </li>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.1)",
              padding: ".3rem 0",
            }}
            className=""
          >
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "15px", fontWeight: "300" }}
              className="fs-14 text-light"
            >
              Help Center
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "15px", fontWeight: "300" }}
              className="fs-14 text-light text-dark"
            >
              Logout
            </li>
          </div>
        </div>
      ) : (
        <div className="">
          <li
            onClick={() => dispatch(onAuthModal())}
            style={{ fontSize: "14.5px", fontWeight: "600" }}
            className="fs-14 text-light"
          >
            Sign in
          </li>
          <li
            onClick={() => dispatch(onAuthModal())}
            style={{ fontSize: "14.5px", fontWeight: "600" }}
            className="fs-14 text-light text-dark"
          >
            Sign up
          </li>
        </div>
      )}
    </motion.ul>
  );
};
export default Dropdown;

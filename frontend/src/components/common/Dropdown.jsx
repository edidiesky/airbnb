import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dropin1, dropin2 } from "../../utils/framer";
import { motion } from "framer-motion";
import { ClearUserInfo, onAuthModal } from "../../Features/user/userSlice";

const Dropdown = ({ setDrop, drop, type }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(ClearUserInfo());
    dispatch(onAuthModal());
    window.location.reload();
  };

  const { userInfo } = useSelector((store) => store.user);

  return (
    <motion.ul
      variants={type ? dropin2 : dropin1}
      initial="hidden"
      animate={drop ? "visible" : "exit"}
      exit={"exit"}
      className="dropdown shadow flex column"
      onClick={() => setDrop(!drop)}
      // style={{ position: "absolute" }}
    >
      {userInfo ? (
        <div style={{ gap: ".2rem" }} className="flex column w-100">
          <div className="w-100 flex column">
            {/* <Link
              className="w-100 li fs-14 text-bold text-dark"
              to={"/guest/inbox/"}
            >
              Messages
            </Link>{" "} */}
            <Link
              className="w-100 li fs-14 text-bold text-dark"
              to={"/wishlists"}
            >
              Wishlists
            </Link>{" "}
            <Link className="w-100 li fs-14 text-bold text-dark" to={"/order"}>
              Orders
            </Link>{" "}
            <Link
              className="w-100 li fs-14 text-bold text-dark"
              to={"/reservations"}
            >
              Reservations
            </Link>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.1)",
              padding: ".3rem 0",
            }}
            className="w-100 flex column"
          >
            <Link
              className="w-100 li fs-14 text-bold text-dark"
              to={"/dashboard/hosting"}
            >
              Manage Listings
            </Link>

            <Link
              className="w-100 li fs-14 text-bold text-dark"
              to={"/account-settings"}
            >
              Account
            </Link>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.1)",
              padding: ".3rem 0",
            }}
            className="w-100 li"
          >
            <li
              onClick={handleLogOut}
              className="fs-14 text-light text-dark w-100 li"
            >
              Logout
            </li>
          </div>
        </div>
      ) : (
        <div className="flex column w-100">
          <div className="w-100">
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "14.5px" }}
              className="fs-14 text-light li text-bold-100"
            >
              Sign in
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "14.5px" }}
              className="fs-14 text-light li text-bold dark w-100"
            >
              Sign up
            </li>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,.1)",
              padding: ".3rem 0",
            }}
            className="w-100"
          >
            <li
              onClick={() => dispatch(onAuthModal())}
              style={{ fontSize: "12px" }}
              className="fs-14 text-light li w-100"
            >
              Airbnb Your Home
            </li>
          </div>
        </div>
      )}
    </motion.ul>
  );
};
export default Dropdown;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { AnimatePresence } from "framer-motion";
import Message from "../../loaders/Message";
import LoaderIndex from "../../loaders";
import Star from "../../common/svg/star";

export default function ProfileLeftIndex({ id }) {
  const { userDetails } = useSelector((store) => store.user);

  return (
    <div>
      {/* <Message
        showAlert={ReservationsUpdateIsSuccess}
        alertText={"Your reservation has been successfully updated"}
        handleClearAlert={dispatch(clearReservationsAlert())}
      /> */}
      <div className="w-100 profileleft flex column gap-2">
        <div className="authCenter flex item-start gap-3 justify-center w-90 auto shadow">
          <div className="authC_right flex gap-1 column flex-1">
            <img src={userDetails?.image} alt="" className="avatar" />
            <h3 className="fs-30 family1 text-center text-extra-bold text-dark">
              {userDetails?.username}
              <span className="block fs-16 text-light text-center family2">
                Superhost
              </span>
            </h3>
          </div>{" "}
          <div className="authC_right flex column flex-1">
            <div className="list1 fs-20 text-bold text-dark">
              171{" "}
              <span className="block fs-12 text-light text-dark">Reviews</span>
            </div>
            <div className="list1 fs-20 text-bold text-dark">
              <div className="flex item-center gap-1 ">
                4.87 <Star />
              </div>{" "}
              <span className="block fs-12 text-light text-dark">Rating</span>
            </div>
            <div className="list1 fs-20 text-bold text-dark">
              1{" "}
              <span className="block fs-10 text-light text-dark">
                Year hosting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

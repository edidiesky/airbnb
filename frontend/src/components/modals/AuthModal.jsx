import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
// import {
//   clearDeleteGigModalAlert,
//   DeleteGig,
//   adminDeleteCustomer,
//   clearUserAlertError,
// } from "../../../Features";
import { RxCross2 } from "react-icons/rx";
import { clearUserAlertError } from "../../Features/user/userSlice";

export default function AuthModal({ type, click }) {
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  // dispatch
  const dispatch = useDispatch();
  // get the cart alert
  //   const { GigsDetails } = useSelector((store) => store.gigs);
  const { userAlert, userDetails } = useSelector((store) => store.user);
  // open modal if type  === users

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(clearUserAlertError())}
      ></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard family1"}
      >
        {/* <div className="cross" onClick={() => dispatch(clearUserAlertError())}>
          <RxCross2 />
        </div> */}
        <div className="w-100">
          <div className="w-100 authTop fs-14 text-dark text-center">
            Login or Sign up
          </div>
        </div>
        <div className="w-90 authBottom auto flex column gap-1">
          <h3 className="fs-20 text-dark text-bold">Welcome to Airbnb</h3>
          <div className="btn w-100 fs-14 text-white text-center">Reserve</div>
          <div className="option">or</div>

          <div className="flex column gap-1">
            <div className="authBtn flex fs-14 text-grey item-center justify-center">
              Continue with Google okm{" "}
            </div>
            <div className="authBtn flex fs-14 text-grey item-center justify-center">
              Continue with Google okm{" "}
            </div>
            <div className="authBtn flex fs-14 text-grey item-center justify-center">
              Continue with Google okm{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </DeleteContainer>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  .btn {
    background: var(--red);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 10px;
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.5rem 2rem;
    border-radius: 8px;
  }
  .authBottom {
    position: relative;
    padding-bottom: 1.6rem;
    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 12px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 1px;
        content: "";
        background-color: rgba(0, 0, 0, 0.1);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 1px;
        content: "";
        background-color: rgba(0, 0, 0, 0.1);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.5);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .deleteCard {
    width: clamp(40%, 100px, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 10px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    @media (max-width: 380px) {
      padding: 4rem 3rem;
      width: 250px;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
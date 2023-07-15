import React, { useEffect } from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProfileLeftIndex from "./left";
import ProfileRightIndex from "./right";
export default function ProfileIndex() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetSingleBuyerReservations(id));
  // }, [id]);

  return (
    <ProfileIndexContent>
      <div className="w-90 auto flex column">
        <div className="w-90 auto py-4 grid grid-auto grid-gap4">
          <ProfileLeftIndex />
          <ProfileRightIndex />
        </div>
      </div>
    </ProfileIndexContent>
  );
}

const ProfileIndexContent = styled.div`
  width: 100%;
  /* padding-top: 2rem; */
  .edit {
    cursor: pointer;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.6rem;
  }
  .avatar {
    width: 7rem !important;
    margin: 0 auto;
    height: 7rem !important;
  }
  .profileleft {
    position: sticky;
    top: 10%;
  }
  .authCenter {
    padding: 3rem;
    box-shadow: 0 19px 39px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: #fff;
  }
  .grid-auto {
    display: grid;
    padding: 3rem;
    grid-template-columns: 26vw 1fr;
    grid-gap: 4rem;
    @media (min-width: 1500px) {
      grid-template-columns: 0.8fr 1fr;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      display: flex;
      padding: 3rem 0;
      flex-direction: column-reverse;
    }
  }
`;

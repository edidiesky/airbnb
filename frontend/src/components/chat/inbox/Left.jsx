import React, { useState } from "react";
import styled from "styled-components";
import { GoFilter } from "react-icons/go";
import { BiSearch, BiStar } from "react-icons/bi";
export default function InboxLeft({ toggle }) {
  const [search, setSearch] = useState(false);
  let image = true;
  const MessageSearch = () => {
    return (
      <div className="w-100 borderB flex item-center gap-1">
        <input
          type="text"
          placeholder="Search for username"
          className="input"
        />
        <h5
          onClick={() => setSearch(false)}
          className="fs-18 text-light text-grey2"
        >
          Close
        </h5>
      </div>
    );
  };
  return (
    <InboxLeftWrapper>
      {search ? (
        <MessageSearch />
      ) : (
        <div className="top fs-20 text-extra-bold flex item-center justify-space w-100">
          Messages
          <div className="icon flex item-center justify-center">
            <GoFilter
              className="fs-24 text-dark"
              onClick={() => setSearch(true)}
            />
          </div>
        </div>
      )}
      <div className="center flex column gap-2">
        <div
          onClick={toggle}
          className="w-85 auto py-1 borderB flex item-center justify-space"
        >
          {/* image and title */}
          <div className="flex1 flex item-center" style={{ gap: "10px" }}>
            <img
              src="https://a0.muscache.com/im/pictures/user/9f63574d-3b11-44c5-937b-5a2eeef401db.jpg?im_w=240"
              alt=""
              className="avatar"
            />
            <h4 className="text-dark fs-16 text-extra-bold">
              Bookiply
              <span
                className="block text-dark"
                style={{
                  margin: "5px auto",
                  fontSize: "15px",
                  fontWeight: "300",
                }}
              >
                Dear Edidiong, Thank you for your message. How can we help you?
              </span>
              <span className="fs-12 text-extra-bold text-grey">
                Inquiry. Dec 8 - 13
              </span>
            </h4>
          </div>
        </div>
      </div>
    </InboxLeftWrapper>
  );
}
const InboxLeftWrapper = styled.div`
  /* width: 500px; */
  flex: 0 0 400px;
  min-height: 100%;
  position: sticky;
  top: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  .avatar {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
  @media (max-width: 980px) {
    display: none;
  }
  .borderB {
    border-radius: 10px;
    /* margin: 10px auto; */
    padding: 1.2rem 2rem;
    background-color: #f7f7f7;
  }
  .top {
    padding: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  h5 {
    &:hover {
      text-decoration: underline;
    }
  }
  .input {
    background-color: #fff;
    padding: 1.2rem 2rem;
    flex: 1;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .center {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    width: 100%;
    max-height: 40rem;
    padding-bottom: 3rem;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #e8e6e6;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey-1);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaMoneyCheck } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";

export default function Widget() {
  const [widgettab, setWidgetTab] = useState(1);
  // const { totalProduct, isStatLoading } = useSelector((store) => store.product);
  // const {  totalUser } = useSelector((store) => store.user);
  const WidgetData = [
    {
      id: 1,
      title: "Total Sales",
      qty: "$100,357",
      icon: <RiMoneyDollarCircleLine />,
      back: "#ff3333",
      percent: "2.6",
    },
    {
      id: 2,
      title: "Visitors",
      qty: `$100`,
      icon: <FaEye />,
      back: "#50fc61",
      percent: "-0.06",
    },
    {
      id: 4,
      title: "Total Product",
      qty: `100`,
      icon: <BiStats />,
      back: "#1457ed",
      percent: "+1.06",
    },
    {
      id: 4,
      title: "Listed Merchant",
      qty: `100`,
      icon: <BsCartPlus />,
      back: "#1457ed",
      percent: "+1.06",
    },
  ];

  return (
    <WidgetWrapper>
      {WidgetData.map((x, index) => {
        return (
          <div
            className={
              widgettab === x.id
                ? "widgetCard active flex item-center family1"
                : "widgetCard flex item-center family1"
            }
            key={x.id}
            onClick={() => setWidgetTab(x.id)}
          >
            <div className="Icons">{x.icon}</div>
            <h3 className="text-dark">
              {x.qty}
              <span className="span1">{x.title}</span>
            </h3>
          </div>
        );
      })}
    </WidgetWrapper>
  );
}

const WidgetWrapper = styled.div`
  display: grid;

  grid-gap: 10px;
  /* transform: translateY(-50%); */

  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .widgetCard {
    padding: 30px 10px;
    background: #fff;
    display: flex;
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    h4 {
      font-size: 13px;
      color: var(--grey-2);
      font-weight: 400;
      .span2 {
        color: var(--green);
      }
    }

    h3 {
      font-family: "Montserrat", sans-serif;
      color: var(--grey-1);
      font-size: 35px;
      color: var(--dark-1);
      font-weight: 700;
      text-transform: uppercase;
      @media (max-width: 780px) {
        font-size: 26px;
      }
      .span1 {
        display: block;
        font-size: 17px;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        color: var(--grey-1);
        text-transform: capitalize;
      }
    }

    .Icons {
      width: 60px;
      height: 60px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: rgba(255, 219, 226, 0.337);

      svg {
        font-size: 20px;
        color: rgb(249, 38, 77);
      }
    }
    &.active,
    &:hover {
      background-color: rgba(255, 219, 226, 0.337);
      box-shadow: 0 20px 46px rgba(0, 0, 0, 0.09);
      .Icons {
        background: rgba(240, 221, 225, 0.626);
        svg {
          color: rgba(240, 49, 88, 0.969);
        }
      }

      h3,
      h4 {
        color: var(--white);
        .span2 {
          color: var(--white);
        }
      }
    }
  }
`;

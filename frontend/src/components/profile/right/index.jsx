import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Language from "../../common/svg/language";
import Globe from "../../common/svg/globe";
import { projectdata } from "../../../data";
import { Card } from "../../common";
import SliderIndex from "../../common/Slider";
import { options3 } from "../../../utils/carousel";

const listingReviews = [
  {
    comments:
      "…We had the great pleasure of hosting 11 days in Lizas and Alexandres Castle. It is an almost fairytale, beautiful place in nature directly on the lake. Alex and Liza are very responsive hosts who care about the",
    image:
      "https://a0.muscache.com/im/pictures/user/0513b5ab-40da-43e5-81d4-e3dcbe7f9320.jpg?im_w=240",
    date: "June 2023",
  },
  {
    comments:
      "…We had the great pleasure of hosting 11 days in Lizas and Alexandres Castle. It is an almost fairytale, beautiful place in nature directly on the lake. Alex and Liza are very responsive hosts who care about the",
    image:
      "https://a0.muscache.com/im/pictures/user/0513b5ab-40da-43e5-81d4-e3dcbe7f9320.jpg?im_w=240",
    date: "June 2023",
  },
  {
    comments:
      "…We had the great pleasure of hosting 11 days in Lizas and Alexandres Castle. It is an almost fairytale, beautiful place in nature directly on the lake. Alex and Liza are very responsive hosts who care about the",
    image:
      "https://a0.muscache.com/im/pictures/user/0513b5ab-40da-43e5-81d4-e3dcbe7f9320.jpg?im_w=240",
    date: "June 2023",
  },
  {
    comments:
      "…We had the great pleasure of hosting 11 days in Lizas and Alexandres Castle. It is an almost fairytale, beautiful place in nature directly on the lake. Alex and Liza are very responsive hosts who care about the",
    image:
      "https://a0.muscache.com/im/pictures/user/0513b5ab-40da-43e5-81d4-e3dcbe7f9320.jpg?im_w=240",
    date: "June 2023",
  },
];

export default function ProfileRightIndex() {
  // const { ReservationsDetails } = useSelector((store) => store.reservations);
  return (
    <ProfileRightIndexContent className="w-100">
      <div className="ProfileRight flex gap-2 column">
        {/* host details */}
        <div className="flex column bottom gap-1">
          <h3 className="fs-35 family1">About Liza</h3>
          <div className="flex item-center fs-16 text-light gap-1 flex-wrap">
            <div className="flex item-center gap-1">
              <Language />
              Speaks Dutch, English, French, Spanish
            </div>
            <div className="flex item-center gap-1">
              <Globe />
              Lives in Requista, France
            </div>
          </div>
          <h5 className="fs-16 text-light">
            We love traveling, photography, hiking, cooking, cinema...
          </h5>
        </div>{" "}
        {/* host reviews */}
        <div className="flex column bottom gap-1">
          <h3 className="fs-24 text-light">Liza’s Reviews</h3>
          <div className="w-100 w-100">
            <SliderIndex options={options3}>
              {listingReviews.map((x) => {
                return (
                  <div className="reviewCard flex column gap-1">
                    <h4 className="fs-16 text-light">"{x.comments}"</h4>
                    <div className="flex item-center justify-start gap-1">
                      <img src={x.image} alt="" className="avatars" />
                      <h4 className="fs-14 family1">
                        Tonya
                        <span className="block fs-12 text-light">{x.date}</span>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </SliderIndex>
          </div>
        </div>
        {/* host lisitng */}
        <div className="flex column bottom gap-1">
          <h3 className="fs-24 text-light">Liza’s listings</h3>
          <div className="wrapper w-100">
            {projectdata.slice(0, 3).map((x, index) => {
              return <Card x={x} type={"listing"} index={index} />;
            })}
          </div>
        </div>
      </div>
    </ProfileRightIndexContent>
  );
}

const ProfileRightIndexContent = styled.div`
  width: 100%;
  overflow: hidden;
  /* .ProfileRight {
    position: sticky;
    top: 10%;
  } */
  .avatars {
    width: 3rem !important;
    height: 3rem !important;
    border-radius: 50%;
    margin: 0 !important;
  }
  .reviewCard {
    padding: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .reviewWraper {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .image {
    width: 50%;
    height: 8rem;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
`;
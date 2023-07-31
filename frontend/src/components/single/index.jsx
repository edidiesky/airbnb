import React from "react";
import TopIndex from "./top";
import CenterIndex from "./center";
import BottomIndex from "./bottom";
import Footer from "./bottom/Footer";
import DetailsLoading from "./Loader";
import { useSelector } from "react-redux";

const SingleIndex = () => {
  const { gigsIsLoading } = useSelector((store) => store.gigs);
  return (
    <div className="w-100">
      <div className="w-85 auto flex column gap-4">
        {!gigsIsLoading ? (
          <DetailsLoading />
        ) : (
          <>
            <TopIndex />
            <CenterIndex />
            <BottomIndex />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleIndex;

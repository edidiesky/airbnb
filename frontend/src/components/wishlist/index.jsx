import React from "react";
import styled from "styled-components";

const WishIndex = () => {
  return (
    <div className="w-85 auto flex column gap-2">
      <h2 className="fs-40">Wishlists</h2>

      <h3 className="fs-24">
        Create your first wishlist
        <span className="py-1 block fs-16 w-90 text-light text-grey">
          As you search, click the heart icon to save your favorite places and
          Experiences to a wishlist.
        </span>
      </h3>
    </div>
  );
};

export default WishIndex;

import React from "react";

const Heart = ({ wishsindex, index }) => {
  const found = wishsindex?.includes(index);
  // console.log(wishsindex,index);
  // console.log(found);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          fill: found ? "var(--red)" : "rgba(0, 0, 0, 0.5)",
          height: "24px",
          width: "24px",
          stroke: found ? "var(--red)" : "#FFFFFF",
          strokeWidth: " 2",
          overflow: "visible",
        }}
      >
        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
      </svg>
    </div>
  );
};

export default Heart;

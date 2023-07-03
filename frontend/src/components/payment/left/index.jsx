import React from "react";

export default function SingleLeftIndex({ id }) {
  return (
    <div>
      <div className="w-100 flex column gap-2">
        <div className="border flex column w-100">
          <h4 className="fs-16 text-dark">
            This is a rare find.
            <span className="text-dark py-1 block text-light fs-18">
              Alyson's place is usually booked.
            </span>
          </h4>
        </div>
        {/* policy */}
        <div className="flex column gap-1 bottom">
          <h3 className="fs-24">Cancellation policy</h3>
          <h4 className="fs-14 family1 text-light">
            <span className="text-bold" style={{ textDecoration: "underline" }}>
              Free cancellation before Nov 9.
            </span>{" "}
            Cancel before check-in on Nov 14 for a partial refund.{" "}
            <span className="text-bold" style={{ textDecoration: "underline" }}>
              Learn more
            </span>
          </h4>
        </div>
        {/* rules */}
        <div className="flex column bottom">
          <h3 className="fs-24">Ground rules</h3>
          <h4 className="fs-16 text-light">
            We ask every guest to remember a few simple things about what makes
            a great guest.
          </h4>
        </div>
        {/* rules
        <h5 className="fs-12 text-light">
          By selecting the button below,{" "}
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            I agree to the Host's House Rules
          </span>
          ,{" "}
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            Ground rules for guests
          </span>{" "}
          ,
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            Airbnb's Rebooking and Refund Policy,
          </span>{" "}
          and that Airbnb can charge my payment method if I’m responsible for
          damage.
        </h5>
        {/* payment button */}
        <div className="w-50 flex item-center">
          <div className="btn fs-16 text-white">Confirm and Pay</div>
        </div>
      </div>
    </div>
  );
}

import mongoose from "mongoose";

// resrevations schema of the buyer the gig created by the author
const ReservationSchema = new mongoose.Schema(
  {
    listing_host_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listing_Id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Listings",
    },
    listing_Host: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    gigQuantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    infants: {
      type: Number,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);

import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    listing_authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    listing_image: {
      type: Array,
      // required: [true, 'PLease add the image value for the Listing']
    },
    listing_title: {
      type: String,
      required: true,
    },
    listing_location: {
      type: String,
    },
    listing_region: {
      type: String,
      enum: [
        "flexible",
        "Africa",
        "United States",
        "United Kingdom",
        "Canada",
        "Middle East",
      ],
    },
    listing_distance: {
      type: Number,
    },
    listing_description: {
      type: String,
      required: true,
    },
    listing_type: {
      type: String,
      enum: ["House", "Apartment", "Guest House", "Hotel"],
      default: "House",
    },
    listing_price: {
      type: Number,
      required: true,
    },
    listing_bedrooms: {
      type: Number,
    },
    listing_bathrooms: {
      type: Number,
    },
    listing_beds: {
      type: Number,
    },
    listing_countInStock: {
      type: Number,
      required: true,
    },
    listing_startDate: {
      type: String,
    },
    listing_endDate: {
      type: String,
    },
    listing_duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listings", ListingSchema);

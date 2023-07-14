import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Listing from "../models/Listing.js";
// GET All Listing
//  Public
const GetAllListing = asyncHandler(async (req, res) => {
  // instantiate the request queries
  // min and max price
  // search and userId
  // category
  const search = req.query.search;
  const minprice = req.query.minprice;
  const category = req.query.category;
  const maxprice = req.query.maxprice;
  const listing_host_Id = req.query.user;
  const sort = req.query.sort;

  const queryObject = {};

  // search
  if (search) {
    queryObject.title = { $regex: search, options: "i" };
  }
  // minimum price
  if (minprice) {
    queryObject.price = { $gt: minprice };
  }
  // maxprice
  if (maxprice) {
    queryObject.price = { $gt: maxprice };
  }
  // user
  if (listing_host_Id) {
    queryObject.listing_host_Id = user;
  }
  // category
  if (category) {
    queryObject.category = category;
  }

  const limit = req.query.limit || 12;
  const page = req.query.page;
  const skip = (page - 1) * limit;

  let result = Listing.find(queryObject)
    .skip(skip)
    .limit(limit)
    .populate("listing_host_Id", "image username");

  // perform sorting operation
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  // console.log(queryObject)

  const totalListing = await Listing.countDocuments({});
  const noOfPages = Math.ceil(totalListing / limit);

  const gig = await result;
  res.status(200).json({ gig, totalListing, noOfPages });
});
//
// GET SINGLE Listing
// Not Private
const GetSingleListing = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Listing
  const gig = await Listing.findById({ _id: id }).populate(
    "listing_host_Id",
    "username image country role"
  );
  if (!gig) {
    res.status(404);
    throw new Error("Listing not found");
  }
  res.status(200).json({ gig });
});

// GET SINGLE Listing
// Not Private
// Admin and seller
const CreateSingleListing = asyncHandler(async (req, res) => {
  // get the request body parameters
  const { userId, role } = req.user;

  if (role === "user") {
    res.status(404);
    throw new Error("User cannot perform this action");
  }

  const gig = await Listing.create({
    listing_host_Id: userId,
    ...req.body
  });

  res.status(200).json({ gig });
});

//PRIVATE
// ADMIN and seller
const UpdateListing = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;

  const gig = await Listing.findById({ _id: req.params.id });

  if (!gig) {
    res.status(404);
    throw new Error("Listing not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // check if the user is the seller or is admin
  if (gig.listing_host_Id.toString() === userId || role === "admin") {
    const data = {
      listing_host_Id: userId,
      ...req.body
    };
    // check for empty values and repeated values

    const updatedListing = await Listing.findByIdAndUpdate(
      { _id: req.params.id },
      { ...data },
      { new: true }
    );
    res.status(200).json({ updatedListing });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

//PRIVATE/
// ADMIN
const DeleteListing = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user;
  const gig = await Listing.findById({ _id: id });

  if (!gig) {
    res.status(404);
    throw new Error("Listing not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  // console.log(gig.listing_host_Id.toString() !== userId);
  // check if the user is the seller or is admin
  if (gig.listing_host_Id.toString() === userId || role === "admin") {
    await Listing.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "The Listing has been successfully deleted" });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
  // console.log(gig);
  // res.status(200).json({ gig});

  // console.log('Helolo world');

});

const GetTopRatedListing = asyncHandler(async (req, res) => {
  // get the Listing but based on the rating and then send 4 Listing
  const toprated = await Listing.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

export {
  GetSingleListing,
  GetAllListing,
  UpdateListing,
  DeleteListing,
  GetTopRatedListing,
  CreateSingleListing,
};

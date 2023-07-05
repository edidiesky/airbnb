// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import Reservations from "../models/Reservations.js";
import Gig from "../models/Gig.js";
// GET All Reservations
//  Public
const GetAllBuyerReservations = asyncHandler(async (req, res) => {
  // instantiate the request queries
  const queryObject = { authorId: req.user.userId };

  let result = Reservations.find(queryObject)
    .populate("sellerId", "image username")
    .populate(
      "gigId",
      "image title category shortDescription price type deliveryDays"
    );

  const totalReservations = await Reservations.countDocuments({});

  const Reservations = await result;
  res.status(200).json({ Reservations, totalReservations });
});

// GET SINGLE Gig
// Not Private
const GetSingleBuyerReservations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const reservations = await Reservations.findOne({ _id: id })
    .populate(
      "gigId",
      "image title price startDate endDate adults children infants"
    )
    .populate("authorId", "username name image country");

  if (!reservations) {
    res.status(404);
    throw new Error("Reservations Item not found");
  }
  res.status(200).json({ reservations });
});

//PRIVATE
// ADMIN
const UpdateBuyerReservations = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const {
    title,
    image,
    category,
    description,
    price,
    countInStock,
    shortDescription,
    tags,
    subInfo,
    type,
    deliveryDays,
  } = req.body;
  const reservation = await Reservations.findById({ _id: req.params.id });

  if (!reservation) {
    res.status(404);
    throw new Error("Reservations not found");
  }
  const data = {
    user: userId,
    title,
    tags,
    image,
    type,
    description,
    price,
    countInStock,
    shortDescription,
    deliveryDays,
    category,
    subInfo,
  };
  // check for empty values and repeated values

  const updatedGig = await Reservations.findByIdAndUpdate(
    { _id: req.params.id },
    { ...data },
    { new: true }
  );
  res.status(200).json({ updatedGig });
});

// GET SINGLE Reservations
// Private
// Admin and seller
const CreateBuyerReservations = asyncHandler(async (req, res) => {
  // idea
  // get the gig id
  // take in the required number of occupants
  // Create a db for that reservations
  // reduce the author gig in terms of quanitity
  // Be able to update the reservations if the gig is already in the resrevations

  // get the request body parameters
  const { qty, adults, children, infants, startDate, endDate } = req.body;

  // console.log(qty);
  const { id } = req.params;
  const gig = await Gig.findById({ _id: id });
  const { userId } = req.user;
  if (!gig) {
    res.status(404);
    throw new Error("Gig not found");
  }

  // check if the gig is alrady in the Reservations
  const alreadyinReservations = await Reservations.findOne({
    gigId: id,
  });
  // if in Reservations update it
  if (alreadyinReservations) {
    let reservations = await Reservations.findOneAndUpdate(
      {
        gigId: id,
        authorId: userId,
      },
      { gigQuantity: qty, adults, children, infants, startDate, endDate },
      { new: true }
    );
    res.status(200).json({ reservations });
  } else {
    // "countInStock": 10,
    // checking if the required quantity is greater that the gig countInStock
    if (qty > gig.countInStock) {
      res.status(404);
      throw new Error(
        "The gig / service is not available for that quantity count"
      );
    }
    // console.log(qty);
    // console.log(gig.countInStock);
    // trying to update the sellers's Gig count in stock
    await Gig.findByIdAndUpdate(
      { _id: id },
      { countInStock: parseInt(gig.countInStock - qty) },
      { new: true }
    );

    // console.log('hello');
    // console.log(gig.countInStock - qty);

    const reservations = await Reservations.create({
      gigQuantity: qty,
      authorId: userId,
      gigId: id,
      adults,
      children,
      infants,
      sellerId: gig.sellerId ? gig.sellerId : gig.user,
    });

    res.status(200).json({ reservations });
  }
});

//PRIVATE/
// ADMIN
const DeleteBuyerReservations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user;
  const gig = await Reservations.findById({ _id: id });

  if (!gig) {
    res.status(404);
    throw new Error("Reservations not found");
  }
  // res.send(role)
  // console.log((role === 'admin'));
  console.log(gig.user.toString() !== userId);
  // check if the user is the seller or is admin
  if (gig.user.toString() === userId || role === "admin") {
    await Reservations.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "The Reservations has been successfully deleted" });
  } else {
    res.status(404);
    throw new Error("You are not authorized to perform this action");
  }
});

const GetTopRatedBuyerReservations = asyncHandler(async (req, res) => {
  // get the Reservations but based on the rating and then send 4 Reservations
  const toprated = await Reservations.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json({ toprated });
});

export {
  GetTopRatedBuyerReservations,
  CreateBuyerReservations,
  DeleteBuyerReservations,
  UpdateBuyerReservations,
  GetAllBuyerReservations,
  GetSingleBuyerReservations,
};

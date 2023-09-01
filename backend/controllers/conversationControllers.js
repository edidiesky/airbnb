import asyncHandler from "express-async-handler";
import Conversation from "../models/Conversation.js";

// Create Conversation
//  Public
const createConversation = asyncHandler(async (req, res) => {
  const { userId, role } = req.user;
  const Conversation = await Conversation.create({
    id: role === "seller" ? userId + req.body.to : req.body.to + userId,
    sellerId: role === "seller" ? userId : req.body.to,
    buyerrId: role === "seller" ? req.body.to : userId,
    readBySeller: role === "seller",
    readByBuyer: role !== "seller",
  });

  res.status(200).json({ Conversation });
});

// GET Review of the user gig
//  Public
// send the gig id only
const getSingleConversation = asyncHandler(async (req, res) => {
  const { role, userId } = req.user;
  // get the role

  const Conversation = await Conversation.findById(
    role === "user" ? { sellerId: userId } : { buyerId: userId }
  );
  res.status(200).json({ Conversation });
});

// GET All Gig
//  Public
// send the gig id only
const getAllConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const Conversation = await Conversation.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!Conversation) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ Conversation });
});

// Like Gig
//  Public
// send the gig id only
const LikeConversation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // find the Gig
  const Conversation = await Conversation.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!Conversation) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ Conversation });
});

// GET All Gig
//  Public
const DeleteConversation = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateConversation = asyncHandler(async (req, res) => {
  // updating the Conversation
  const updatedConversation = await Conversation.findByIdAndUpdate(
    { id: req.params.id },
    {
      ...(req.role === "seller"
        ? { readBySeller: true }
        : { readByBuyer: false }),
    },
    { new: true }
  );
  res.status(200).json({ updatedConversation });
});

export { createConversation, getSingleConversation, DeleteConversation, getAllConversation, UpdateConversation };

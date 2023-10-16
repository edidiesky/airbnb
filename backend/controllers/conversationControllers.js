import asyncHandler from "express-async-handler";
import Conversation from "../models/Conversation.js";

// Create Conversation
//  Public
const createConversation = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const Conversation = await Conversation.create({
    Id: !userId ? userId + req.body.to : req.body.to + userId,
    sellerId: req.body.to,
    buyerrId: userId,
    readBySeller: userId !== req.body.to,
    readByBuyer: userId === req.body.to,
  });

  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ Conversation });
});

// GET Review of the user gig
//  Public
// send the gig Id only
const getSingleConversation = asyncHandler(async (req, res) => {
  const { role, userId } = req.user;
  // get the role

  const Conversation = await Conversation.findById(
    role === "user" ? { sellerId: userId } : { buyerId: userId }
  );
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ Conversation });
});

// GET All Gig
//  Public
// send the gig Id only
const getAllConversation = asyncHandler(async (req, res) => {
  const { Id } = req.params;
  // find the Gig
  const Conversation = await Conversation.find({})
    .populate("reviewuser", "country email username")
    .populate("sellerId", "username");
  if (!Conversation) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ Conversation });
});



// GET All Gig
//  Public
const DeleteConversation = asyncHandler(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateConversation = asyncHandler(async (req, res) => {
  // updating the Conversation
  const updatedConversation = await Conversation.findByOneAndUpdate(
    { Id: req.params.Id },
    { readByBuyer: false, readBySeller: true },
    { new: true }
  );
  res.setHeader("Content-Type", "text/html");
res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
 
  res.status(200).json({ updatedConversation });
});

export {
  createConversation,
  getSingleConversation,
  DeleteConversation,
  getAllConversation,
  UpdateConversation,
};

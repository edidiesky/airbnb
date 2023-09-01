import mongoose from "mongoose";

// a structure of the Chat
const UserConversationSchema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: String,
      required: true,
    },
    readByBuyer: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", UserConversationSchema);

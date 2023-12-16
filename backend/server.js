import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookiesession from "cookie-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User.js";
dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";
app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true,
  })
);
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookiesession({
    name: "session",
    keys: ["Edidiong"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);


// routes

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import listingRoute from "./routes/listingRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import reservationRoute from "./routes/reservations.js";
import orderRoute from "./routes/orderRoutes.js";
// import conversationRoute from "./routes/conversationRoutes.js";


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/listing", listingRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/reservations", reservationRoute);
// app.use("/api/v1/conversation", conversationRoute);
const __dirname = path.resolve();


mongoose.connect(
  process.env.MONGO_URl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);

// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server is listening on port 4000");
});

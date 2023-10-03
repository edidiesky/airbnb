import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookiesession from "cookie-session";

dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";
app.use(
  cors({
    origin: ["https://airbnb-api-mocha.vercel.app/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
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
app.use(passport.initialize());
app.use(passport.session());

// routes

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import listingRoute from "./routes/listingRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import reservationRoute from "./routes/reservations.js";
import orderRoute from "./routes/orderRoutes.js";
import conversationRoute from "./routes/conversationRoutes.js";

// end points
app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/listing", listingRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/reservations", reservationRoute);
app.use("/api/v1/conversation", conversationRoute);
// app.get('/payment_intents', getAllStripePaymentIntent)
const __dirname = path.resolve();

// console.log((path.join(__dirname, '/public/uploads')))

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

// production mode process

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server is listening on port 4000");
});

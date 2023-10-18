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
// app.use(
//   cors({
//     origin: ["https://airbnb-client.vercel.app/"],
//     methods: ["POST", "GET", "DELETE", "PUT"],
//     credentials: true,
//   })
// );
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
app.use(passport.initialize());
app.use(passport.session());

// // Oauth
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.google_client_id,
//       clientSecret: process.env.google_client_secret,
//       callbackURL: "http://www.example.com/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOne({ email: profile.email[0].value }, function (err, user) {
//         if (err) return done(err);
//         if (user) return done(null, user);
//         const newUser = new User({
//           email: profile.email[0].value,
//         });
//         newUser.save((err) => {
//           if (err) return done(err);
//           return done(null, newUser);
//         });
//       });
//     }
//   )
// );
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// app.get(
//   "/auth/google/login",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/profile", // Redirect to the user's profile page on success
//     failureRedirect: "/login", // Redirect to the login page on failure
//   })
// );

// app.get(
//   "/auth/google/register",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get("/auth/google/register/callback", (req, res) => {
//   // This route is reached after Google authentication
//   // Here, you can check if the user already exists in your database
//   // If the user exists, you can associate their Google account with the existing account
//   // If the user doesn't exist, you can create a new account for them
//   res.redirect("/profile"); // Redirect to the user's profile page
// });

// app.get("/login", (req, res) => {
//   // You can still render a login page here if you want to allow traditional login.
//   // If you only want to support Google OAuth, you can redirect users to the Google OAuth login route.
//   res.redirect("/auth/google/login");
// });

// app.get("/profile", (req, res) => {
//   // Ensure user is authenticated, and render the user's profile
//   if (req.isAuthenticated()) {
//     // Render the user's profile
//     res.send("Welcome to your profile!");
//   } else {
//     // Redirect to the login page if not authenticated
//     res.redirect("/http://localhost:5173//auth/google/callback");
//   }
// });


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
// app.use("/api/v1/upload", uploadRoute);
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

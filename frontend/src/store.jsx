import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/user/userSlice";
import wishSlice from "./Features/wish/wishSlice";
import gigSlice from "./Features/gigs/gigsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    wish: wishSlice,
    gig:gigSlice
  },
});

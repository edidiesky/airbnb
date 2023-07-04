import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/user/userSlice";
import wishSlice from "./Features/wish/wishSlice";
import gigSlice from "./Features/gigs/gigsSlice";
import reservationSlice from "./Features/reservations/reservationsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    wish: wishSlice,
    gigs: gigSlice,
    reservations: reservationSlice,
  },
});

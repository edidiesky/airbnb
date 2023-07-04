import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllBuyerReservations,
  CreateBuyerReservations,
  DeleteBuyerReservations,
  UpdateBuyerReservations,
  GetSingleBuyerReservations
} from "./reservationsReducer";
const initialState = {
  // states
  ReservationsIsSuccess: false,
  ReservationsIsError: false,
  ReservationsIsLoading: false,
  totalReservations: 0,
  Reservations: null,
  ReservationsDetails:null,

  // alert states
  showAlert: false,
  alertText: "",
  alertType: "",
};

const ReservationsSlice = createSlice({
  name: "Reservations",
  initialState,
  reducers: {
    clearReservationsAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.ReservationsIsSuccess = false;
      state.ReservationsIsError = false;
      state.ReservationsAlert = false;
    },
    clearReservations: (state, action) => {
      state.Reservations = null;
    },
  },

  extraReducers: {
    //
    [GetAllBuyerReservations.pending]: (state) => {
      state.ReservationsIsLoading = true;
    },
    [GetAllBuyerReservations.fulfilled]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.Reservations = action.payload.gig;
      state.totalReservations = action.payload.totalGig;
      state.showAlert = true;
      state.alertText = "All Reservations has been successfully fetched";
    },
    // Reservations
    [GetAllBuyerReservations.rejected]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.showAlert = true;
      state.ReservationsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    [GetSingleBuyerReservations.pending]: (state) => {
      state.ReservationsIsLoading = true;
    },
    [GetSingleBuyerReservations.fulfilled]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.ReservationsDetails = action.payload;
      state.showAlert = true;
    },
    // Reservations
    [GetSingleBuyerReservations.rejected]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.showAlert = true;
      state.ReservationsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // create Reservations action handling
    [CreateBuyerReservations.pending]: (state) => {
      state.ReservationsIsLoading = true;
    },
    [CreateBuyerReservations.fulfilled]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.ReservationsDetails = action.payload;
      state.ReservationsIsSuccess = true;
      state.showAlert = true;
      state.alertText = `Added successfully to Reservations`;
      state.alertType = "success";
    },
    [CreateBuyerReservations.rejected]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.showAlert = true;
      state.ReservationsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // update the gig
    [UpdateBuyerReservations.pending]: (state) => {
      state.ReservationsIsLoading = true;
    },
    [UpdateBuyerReservations.fulfilled]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.ReservationsIsSuccess = true;
      state.showAlert = true;
      state.alertText = "Your Reservations has been successfully updated";
    },
    [UpdateBuyerReservations.rejected]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.showAlert = true;
      state.ReservationsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // delete gig
    [DeleteBuyerReservations.pending]: (state) => {
      state.ReservationsIsLoading = true;
    },
    [DeleteBuyerReservations.fulfilled]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.Reservations = state.Reservations.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.ReservationsDetails.title} has been successfully deleted`;
    },
    [DeleteBuyerReservations.rejected]: (state, action) => {
      state.ReservationsIsLoading = false;
      state.showAlert = true;
      state.ReservationsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },
  },
});

export const { clearReservations, clearReservationsAlert } = ReservationsSlice.actions;

export default ReservationsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all Reservations for the seller and admin
export const GetAllBuyerReservations = createAsyncThunk(
  "/Reservations/allBuyerReservations",
  async (id, thunkAPI) => {
    try {
      let ReservationsUrl = `/api/v1/reservations/${id}`;
      const { data } = await axios.get(ReservationsUrl);
      return data.Reservations;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// fetching all Reservations for the buyer
export const GetSingleBuyerReservations = createAsyncThunk(
  "/Reservations/singleBuyerReservations",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    const config = {
      headers: {
        authorization: `Bearer ${state.user.token}`,
      },
    };
    try {
      let ReservationsUrl = `/api/v1/reservations/buyer/${name}`;
      const { data } = await axios.get(ReservationsUrl, config);
      return data.Reservations;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
// fetching single Reservations based on its id
export const CreateBuyerReservations = createAsyncThunk(
  "Reservations/createBuyerReservations",
  async (reservationdata, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      // console.log(reservationdata)
     
      const { data } = await axios.post(
        `/api/v1/reservations/${state.gigs.GigsDetails._id}`,
        reservationdata
      );

      return data.Reservations;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Update a single Reservations
export const UpdateBuyerReservations = createAsyncThunk(
  "/Reservations/updateBuyerReservations",
  async (GigsData, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { _id } = state.Gigs.GigsDetails;
      const { data } = await axios.put(
        `/api/v1/gig/admin/${_id}`,
        GigsData,
        config
      );
      localStorage.setItem("Gigss", JSON.stringify(data.updatedGigs));
      return data.updatedGigs;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Delete a single Reservations
export const DeleteBuyerReservations = createAsyncThunk(
  "/Reservations/deleteGig",
  async (Reservationsid, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.delete(
        `/api/v1/gig/admin/${Reservationsid}`,
        config
      );
      return Reservationsid;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated Reservations
export const getTopRatedGigs = createAsyncThunk(
  "/get/topRatedGigs",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/gig/rated`, config);
      return data.toprated;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Get al toprated Reservations
export const GetTopRatedBuyerReservations = createAsyncThunk(
  "/get/getGigsStats",
  async (name, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`,
        },
      };
      const { data } = await axios.get(`/api/v1/gig/stats`, config);
      return data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

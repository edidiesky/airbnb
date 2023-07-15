import { createSlice } from "@reduxjs/toolkit";
import {
  getAllGigs,
  getSingleGigsDetails,
  CreateSingleGig,
  DeleteGig,
  UpdateGig,
} from "./listingReducer";

const host_listings = JSON.parse(localStorage.getItem("host_listing"));

const initialState = {
  // states
  gigsIsSuccess: false,
  gigsIsError: false,
  gigsIsLoading: false,
  totalGigs: 0,
  Gigs: [],
  GigsDetails: null,

  // alert states
  showAlert: false,
  alertText: "",
  alertType: "",
  noOfPages: 0,

  // req queries
  category: "",
  search: "",
  sort: "",
  limit: 10,
  user: "",
  maxprice: 0,
  minprice: 0,
  page: 1,
  deleteGigModalAlert: false,
  selectmodal: false,
  calendarmodal: false,
  host_listing: host_listings
    ? host_listings
    : {
        listing_structure: "",
        listing_location: "",
        listing_guests: 0,
        listing_bedrooms: 0,
        listing_beds: 0,
        listing_offer: [],
        listing_images: [],
        listing_title: [],
        listing_description: "",
        listing_price: "",
        listing_region: "",
        listing_type: "",
      },
};

const GigsSlice = createSlice({
  name: "Gigs",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    setStructure: (state, action) => {
      state.authorGig = {
        structure: action.payload,
      };
    },
    setLocation: (state, action) => {
      state.authorGig = {
        location: action.payload,
      };
    },
    getQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    getPage: (state, action) => {
      state.page = action.payload;
    },
    onSelectModal: (state, action) => {
      state.selectmodal = true;
    },
    offSelectModal: (state, action) => {
      state.selectmodal = false;
    },
    onCalendarModal: (state, action) => {
      state.calendarmodal = true;
    },
    offCalendarModal: (state, action) => {
      state.calendarmodal = false;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
    cleargetCategory: (state, action) => {
      state.category = null;
    },
    getSort: (state, action) => {
      state.sort = action.payload;
    },
    getGigs: (state, action) => {
      state.deleteGigModalAlert = true;
      state.GigsDetails = action.payload;
    },
    getSearch: (state, action) => {
      state.search = action.payload;
    },
    clearGigsAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.gigsIsSuccess = false;
      state.gigsIsError = false;
      state.category = null;
      state.minprice = 0;
      state.maxprice = 0;
      state.search = "";
      state.GigsAlert = false;
    },
    clearDeleteGigModalAlert: (state, action) => {
      state.deleteGigModalAlert = false;
    },
    clearGigsDetails: (state, action) => {
      state.GigsDetails = null;
    },
    clearGigs: (state, action) => {
      state.Gigs = null;
    },
    clearPage: (state, action) => {
      state.page = 1;
    },
    getMaxPrice: (state, action) => {
      state.maxprice = action.payload;
    },
    getMinPrice: (state, action) => {
      state.minprice = action.payload;
    },
    handleListingType: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_type: action.payload,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleListingLocation: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_location: action.payload.location,
        listing_region: action.payload.region,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleBasicListing: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_beds: action.payload.beds,
        listing_bedrooms: action.payload.bedrooms,
        listing_guests: action.payload.guests,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
  },

  extraReducers: {
    //
    [getAllGigs.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [getAllGigs.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.Gigs = action.payload.gig;
      state.totalGigs = action.payload.totalGig;
      state.noOfPages = action.payload.noOfPages;
      state.showAlert = true;
      state.alertText = "All Gigs has been successfully fetched";
    },
    // gigs
    [getAllGigs.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // create gigs action handling
    [CreateSingleGig.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [CreateSingleGig.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.GigsDetails = action.payload;
      state.gigsIsSuccess = true;
      state.showAlert = true;
      state.alertText = `Succesfully created your gig`;
      state.alertType = "success";
    },
    [CreateSingleGig.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // get single gig details
    [getSingleGigsDetails.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [getSingleGigsDetails.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.GigsDetails = action.payload;
    },
    [getSingleGigsDetails.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // update the gig
    [UpdateGig.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [UpdateGig.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.gigsIsSuccess = true;
      state.showAlert = true;
      state.alertText = "Gigs has been successfully updated";
    },
    [UpdateGig.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // delete gig
    [DeleteGig.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [DeleteGig.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.Gigs = state.Gigs.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.GigsDetails.title} has been successfully deleted`;
    },
    [DeleteGig.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // [getGigsStats.pending]: (state) => {
    //   state.gigsIsLoading = true;
    // },
    // [getGigsStats.fulfilled]: (state, action) => {
    //   state.gigsLoading = false;
    //   state.GigsStat = action.payload;
    // },
    // [getGigsStats.rejected]: (state, action) => {
    //   state.gigsLoading = false;
    //   state.showAlert = true;
    //   state.gigsIsError = true;
    //   state.alertText = action.payload;
    //   state.alertType = "danger";
    // },
  },
});

// console.log(GigsSlice);
export const {
  clearAlert,
  getSort,
  getPage,
  clearGigsAlert,
  getQuantity,
  handleCategoryFilter,
  clearReviewAction,
  clearPage,
  getSearch,
  getGigs,
  clearGigsDetails,
  clearGigs,
  getCategory,
  getMinPrice,
  getMaxPrice,
  cleargetCategory,
  clearDeleteGigModalAlert,
  onSelectModal,
  offSelectModal,
  onCalendarModal,
  offCalendarModal,

  handleListingType,
  handleListingLocation,
  handleBasicListing
} = GigsSlice.actions;

export default GigsSlice.reducer;

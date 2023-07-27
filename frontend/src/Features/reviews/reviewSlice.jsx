import { createSlice } from "@reduxjs/toolkit";
import {
  getAllReviews,
  getSingleReviewsDetails,
  CreateSingleReview,
  DeleteReview,
  UpdateReview,
} from "./reviewReducer";

const host_listings = JSON.parse(localStorage.getItem("host_listing"));

const initialState = {
  // states
  gigsIsSuccess: false,
  gigsIsError: false,
  gigsIsLoading: false,
  totalReviews: 0,
  Reviews: [],
  ReviewsDetails: null,

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
  deleteReviewModalAlert: false,
  selectmodal: false,
  calendarmodal: false,
  host_listing: host_listings
    ? host_listings
    : {
        listing_location: "",
        listing_guests: 0,
        listing_bedrooms: 0,
        listing_beds: 0,
        listing_image: [],
        listing_title: [],
        listing_description: "",
        listing_price: "",
        listing_region: "",
        listing_type: "",
        listing_startDate:"",
        listing_endDate:""
      },
};

const ReviewsSlice = createSlice({
  name: "Reviews",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    setStructure: (state, action) => {
      state.authorReview = {
        structure: action.payload,
      };
    },
    setLocation: (state, action) => {
      state.authorReview = {
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
    getReviews: (state, action) => {
      state.deleteReviewModalAlert = true;
      state.ReviewsDetails = action.payload;
    },
    getSearch: (state, action) => {
      state.search = action.payload;
    },
    clearReviewsAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.gigsIsSuccess = false;
      state.gigsIsError = false;
      state.gigsIsLoading = false;
      state.category = null;
      state.minprice = 0;
      state.maxprice = 0;
      state.search = "";
      state.ReviewsAlert = false;
    },
    clearDeleteReviewModalAlert: (state, action) => {
      state.deleteReviewModalAlert = false;
    },
    clearReviewsDetails: (state, action) => {
      state.ReviewsDetails = null;
    },
    clearReviews: (state, action) => {
      state.Reviews = null;
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
    handleListingImage: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_image: action.payload,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleListingTitle: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_title: action.payload,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleListingDescription: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_description: action.payload,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleListingDate: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_startDate: action.payload.startDate,
        listing_endDate: action.payload.endDate,
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
    handleListingPrice: (state, action) => {
      state.host_listing = {
        ...state.host_listing,
        listing_price: parseInt(action.payload),
      };
      localStorage.setItem("host_listing", JSON.stringify(state.host_listing));
    },
  },

  extraReducers: {
    //
    [getAllReviews.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [getAllReviews.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.Reviews = action.payload.gig;
      state.totalReviews = action.payload.totalReview;
      state.noOfPages = action.payload.noOfPages;
      state.showAlert = true;
      state.alertText = "All Reviews has been successfully fetched";
    },
    // gigs
    [getAllReviews.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // create gigs action handling
    [CreateSingleReview.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [CreateSingleReview.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.ReviewsDetails = action.payload;
      state.gigsIsSuccess = true;
      state.showAlert = true;
      state.alertText = `Succesfully created your gig`;
      state.alertType = "success";
    },
    [CreateSingleReview.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // get single gig details
    [getSingleReviewsDetails.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [getSingleReviewsDetails.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.ReviewsDetails = action.payload;
    },
    [getSingleReviewsDetails.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // update the gig
    [UpdateReview.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [UpdateReview.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.gigsIsSuccess = true;
      state.showAlert = true;
      state.alertText = "Reviews has been successfully updated";
    },
    [UpdateReview.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // delete gig
    [DeleteReview.pending]: (state) => {
      state.gigsIsLoading = true;
    },
    [DeleteReview.fulfilled]: (state, action) => {
      state.gigsIsLoading = false;
      state.Reviews = state.Reviews.filter((x) => x._id !== action.payload);
      state.showAlert = true;
      state.alertText = `${state.ReviewsDetails.title} has been successfully deleted`;
    },
    [DeleteReview.rejected]: (state, action) => {
      state.gigsIsLoading = false;
      state.showAlert = true;
      state.gigsIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
      state.showAlert = true;
    },

    // [getReviewsStats.pending]: (state) => {
    //   state.gigsIsLoading = true;
    // },
    // [getReviewsStats.fulfilled]: (state, action) => {
    //   state.gigsLoading = false;
    //   state.ReviewsStat = action.payload;
    // },
    // [getReviewsStats.rejected]: (state, action) => {
    //   state.gigsLoading = false;
    //   state.showAlert = true;
    //   state.gigsIsError = true;
    //   state.alertText = action.payload;
    //   state.alertType = "danger";
    // },
  },
});

// console.log(ReviewsSlice);
export const {
  clearAlert,
  getSort,
  getPage,
  clearReviewsAlert,
  getQuantity,
  handleCategoryFilter,
  clearReviewAction,
  clearPage,
  getSearch,
  getReviews,
  clearReviewsDetails,
  clearReviews,
  getCategory,
  getMinPrice,
  getMaxPrice,
  cleargetCategory,
  clearDeleteReviewModalAlert,
  onSelectModal,
  offSelectModal,
  onCalendarModal,
  offCalendarModal,

  handleListingType,
  handleListingLocation,
  handleBasicListing,
  handleListingImage,
  handleListingTitle,
  handleListingDescription,
  handleListingPrice,
  handleListingDate
} = ReviewsSlice.actions;

export default ReviewsSlice.reducer;

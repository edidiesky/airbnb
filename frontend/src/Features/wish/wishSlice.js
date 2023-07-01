import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// getting values from the localStorage
const wishItems = JSON.parse(localStorage.getItem("wishItem"));

const initialState = {
  isSuccess: false,
  isError: false,
  wish: wishItems ? wishItems : [],
  wishDetails: null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  wishAlert: false,
  wishtitlemodal: false,
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    clearWishAlert: (state, action) => {
      state.wishAlert = false;
    },
    clearWishMessage: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    onWishAlert: (state, action) => {
      const wishItemPayload = action.payload;
      state.wishAlert = true;
      state.wishDetails = wishItemPayload;
    },
    addProductToWish: (state, action) => {
      // console.log(action);
      const wishPayload = action.payload;
      // find the product in the wish
      const isProductInwish = state.wish.find((x) => x._id === wishPayload._id);
      // check for existence in the wish
      if (isProductInwish) {
        // update the wish
        state.wish = state.wish.map((x) =>
          x._id === isProductInwish._id ? wishPayload : x
        );
        localStorage.setItem("wishItem", JSON.stringify(state.wish));
        state.showAlert = true;
        state.alertText = `${wishPayload.title} has been successfully added to your Wish`;
      } else {
        state.wish = [...state.wish, wishPayload];
        localStorage.setItem("wishItem", JSON.stringify(state.wish));
        state.showAlert = true;
        state.alertText = `${wishPayload.title} has been successfully added to your Wish`;
      }
    },
    removewishItem: (state, action) => {
      const wishItemPayload = action.payload;
      // remove the item from the wish
      state.wish = state.wish.filter((x) => x._id !== wishItemPayload._id);
      state.showAlert = true;
      state.wishAlert = false;
      state.alertType = "danger";
      state.alertText = `${wishItemPayload.title} has been successfully removed from your Wish items`;
      localStorage.setItem("wishItem", JSON.stringify(state.wish));
    },
    ClearwishData: (state, action) => {
      localStorage.removeItem("wishItem");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("TotalShoppingPrice");
      state.isLoading = false;
      state.isSuccess = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },
  },
});

// console.log(wishSlice);
export const {
  clearWishAlert,
  addProductToWish,
  calculatewishItem,
  removewishItem,
  onWishAlert,
  clearWishMessage,
} = wishSlice.actions;

export default wishSlice.reducer;

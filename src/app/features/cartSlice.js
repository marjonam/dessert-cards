import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";

const initialState = {
  desserts: [...desserts],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.desserts.find((d) => d.id == payload);
      item.amount = 1;
      cartSlice.caseReducers.calculateTotal(state);
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.desserts.find((d) => d.id == payload);
      item.amount += 1;
      cartSlice.caseReducers.calculateTotal(state);
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.desserts.find((d) => d.id == payload);
      item.amount -= 1;
      cartSlice.caseReducers.calculateTotal(state);
    },
    removeFromCart: (state, { payload }) => {
      const item = state.desserts.find((d) => d.id == payload);
      item.amount = 0;
      cartSlice.caseReducers.calculateTotal(state);
    },
    resetCart: (state) => {
      state.desserts.forEach((dessert) => {
        dessert.amount = 0;
      });
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    calculateTotal: (state) => {
      let allPrice = 0;
      let allAmount = 0;

      state.desserts.forEach((d) => {
        allPrice += d.amount * d.price;
        allAmount += d.amount;
      });
      state.totalAmount = allAmount;
      state.totalPrice = allPrice;
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;

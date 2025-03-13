import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";

const initialState = {
  desserts,
  selectedDesserts: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.selectedDesserts.find((d) => d.id === payload.id);
      if (item) {
        item.amount += 1;
      } else {
        state.selectedDesserts.push({ ...payload, amount: 1 });
      }
      state.totalPrice += payload.price;
      state.totalAmount += 1;
    },
    increaseQuantity: (state, { payload }) => {
      const dessert = state.selectedDesserts.find((d) => d.id === payload);
      if (dessert) {
        dessert.amount += 1;
      }
      cartSlice.caseReducers.calculateTotal(state);
    },

    decreaseQuantity: (state, { payload }) => {
      const dessert = state.selectedDesserts.find((d) => d.id === payload);
      if (dessert) {
        if (dessert.amount > 1) {
          dessert.amount -= 1;
        } else {
          state.selectedDesserts = state.selectedDesserts.filter(
            (d) => d.id !== payload
          );
        }
      }
      cartSlice.caseReducers.calculateTotal(state);
    },
    removeFromCart: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
    },
    resetCart: (state, { payload }) => {},

    calculateTotal: (state) => {
      let allPrice = 0;
      let allAmount = 0;

      state.selectedDesserts.forEach((d) => {
        allPrice += d.amount * d.price;
        allAmount + -d.amount;
      });
      state.totalAmount = allAmount;
      state.totalPrice = allPrice;
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;

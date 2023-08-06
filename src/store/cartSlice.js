import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (state.indexOf(existingProduct) !== -1) {
        // existingProduct.quantity += 1;
        return;
      }
      state.push({ ...product, quantity: 1 });
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseNoItems(state, action) {
      const productId = action.payload;
      const existingProduct = state.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseNoItems(state, action) {
      const productId = action.payload;
      const existingProduct = state.find((item) => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return;
        } else existingProduct.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increaseNoItems, decreaseNoItems } =
  cartSlice.actions;

export default cartSlice.reducer;

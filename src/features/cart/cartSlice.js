import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "asdasd",
      quantity: 2,
      unitPrice: 12.99,
      totalPrice: 25.98,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) {
        return;
      }

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = initialState.cart;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

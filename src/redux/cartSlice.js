import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {
    increaseQuantity(state, action) {
      const item = state.cart.products.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
      item.total = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.products.find(
        (item) => item.id === action.payload
      );
      item.quantity--;
      item.total = item.quantity * item.price;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deteleItem(state, action);
      }
    },
    deteleItem(state, action) {
      state.cart.products = state.cart.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    });
    builder.addCase(fetchCartItems.rejected, (state) => {
      state.status = "loading";
    });
  },
});

export const { increaseQuantity, decreaseQuantity, deteleItem } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) => {
  return state.cart.cart.products?.reduce((sum, item) => sum + item.total, 0);
};

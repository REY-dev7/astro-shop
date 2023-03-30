import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  products: IProduct[];
}
export interface IProduct{
    id: number
    title: string
    desc: string
    price: number
    img: string
    quantity:number
}

const initialState: CounterState = {
  products: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const item = state.products.find(
        (item) => item?.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
        state.products = state.products.filter((item:any)=>item.id !== action.payload)
    },
    resetCart: (state, action: PayloadAction) => {
        state.products = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } =
cartSlice.actions;

export default cartSlice.reducer;

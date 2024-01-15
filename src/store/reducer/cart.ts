import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../pages/Home";

type CartState = {
  items: Game[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;

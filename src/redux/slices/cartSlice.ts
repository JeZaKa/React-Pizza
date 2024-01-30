import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../types/types";
import { RootState } from "../store";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

interface ICartSliceState {
  totalPrice: number;
  items: IPizza[];
}

const {items, totalPrice} = getCartFromLS();

const initialState: ICartSliceState = {
  items,
  totalPrice,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IPizza>) {
      const findItems = state.items.find(obj => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
   
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find(obj => obj.id === action.payload);
      if (findItems) {
        findItems.count = Math.max(findItems.count - 1, 0);
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Math.max((obj.price * obj.count), 0) + sum;
      }, 0);
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },
      
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    }

  }

});

export const selectCart = (state: RootState) => state.cart;

export const { addItem, minusItem, clearItems, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
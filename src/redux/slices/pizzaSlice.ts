import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IPizzas } from "../../types/types";

type FetchPizzasArgs = Record<string, string>;

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus', async (params: FetchPizzasArgs) => {
    const { sortBy, order, category, search, pageCount} = params;
    const { data } = await axios.get(`https://65a3d503a54d8e805ed40e09.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
    return data as IPizzas[];
  }
)

enum Status {
  LOADING = 'loading',
  SUCCES = 'success',
  ERROR = 'error'
}

type PizzasSliceState = {
  items: IPizzas[];
  status: Status;
}

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
}
export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  }

  }
);

export const selectPizzas = (state: RootState) => state.pizza;
export const selectPizzaData = (id: string) => ((state: RootState) => state.cart.items.find(obj => obj.id === id))


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
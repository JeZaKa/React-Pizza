import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState, SortItem } from '../../types/types';
import { RootState } from '../store';

const initialState: IFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState ,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    }
  }
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectSortObj = (state: RootState) => state.filter;

export const {setCategoryId, setSort, setPageCount, setFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer
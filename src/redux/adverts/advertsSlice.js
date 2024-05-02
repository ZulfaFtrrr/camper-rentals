import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertById } from './advertsOperations.js';

const initialState = {
  adverts: [],
  advertById: null,
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //---------------fetchAdverts

      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      //---------------fetchAdvertById
      .addCase(fetchAdvertById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advertById = action.payload;
      })

      .addMatcher(
        isAnyOf(fetchAdverts.pending, fetchAdvertById.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchAdverts.rejected, fetchAdvertById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

// export const advertsReducer = advertsSlice.reducer;

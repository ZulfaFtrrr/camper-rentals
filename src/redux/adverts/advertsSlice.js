import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations.js';

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
  favorites: [],
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    //----------------favorites
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      const index = state.favorites.findIndex(
        (advert) => advert._id === action.payload
      );
      state.favorites.splice(index, 1);
    },
  },

  extraReducers: (builder) =>
    builder
      //---------------fetchAdverts
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })

      .addMatcher(isAnyOf(fetchAdverts.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchAdverts.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;

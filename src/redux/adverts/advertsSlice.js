import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations.js';
import { limit } from '../../helpers/constants.js';

const initialState = {
  adverts: [],
  favorites: [],
  page: 1,
  isLoadMore: true,
  isLoading: false,
  error: null,
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
    //----------------page
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    // ?????
    hideLoadMoreFavs: (state) => {
      state.isLoadMore = false;
    },
    resetAdverts: (state) => {
      state.page = 1;
      state.adverts = [];
      state.isLoadMore = true;
    },
    resetFavsPage: (state) => {
      state.page = 1;
      state.isLoadMore = true;
    },
    resetAdvertsFavs: (state) => {
      state.page = 1;
      // state.adverts = [];
      if (state.favorites.length <= limit) state.isLoadMore = false;
      else state.isLoadMore = true;
    },
  },

  extraReducers: (builder) =>
    builder
      //---------------fetchAdverts
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;

        // console.log(state.adverts, '- state', action.payload, '- payload');

        state.adverts = [...state.adverts, ...action.payload]; //
        if (action.payload.length < limit) state.isLoadMore = false;

        console.log(state.adverts);
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

export const {
  addToFavorites,
  removeFromFavorites,
  increasePage,
  resetAdverts,
  hideLoadMoreFavs,
  resetFavsPage,
  resetAdvertsFavs,
} = advertsSlice.actions;

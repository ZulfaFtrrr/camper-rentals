import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAdverts,
  fetchFilteredAdverts,
  // resetFilteredAdverts,
} from './advertsOperations.js';
import { limit } from '../../helpers/constants.js';

const initialState = {
  adverts: [],
  filteredAdverts: [],
  favorites: [],
  page: 1,
  filtersPage: 1,
  filters: {},
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
      // console.log(action.payload);
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
      if (state.filteredAdverts.length > 0)
        state.filtersPage = state.filtersPage + 1; // ??
      else state.page = state.page + 1;
    },
    // ?????
    hideLoadMoreFavs: (state) => {
      state.isLoadMore = false;
    },
    hideLoadMore: (state) => {
      state.isLoadMore = false;
    },

    //+
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

    resetFilteredAdverts: (state) => {
      state.filtersPage = 1;
      state.filteredAdverts = [];
      state.isLoadMore = true; //
    },

    addFilters: (state, action) => {
      state.filters = action.payload;
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

        // console.log(state.adverts);
      })

      .addCase(fetchFilteredAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.filters =
        console.log(action.payload, 'PAYLOAD FILTER ADVERTS');
        // state.adverts = action.payload;

        state.filteredAdverts = [...state.filteredAdverts, ...action.payload];
        state.adverts = [];

        if (action.payload.length < limit) state.isLoadMore = false;
        else state.isLoadMore = true;
      })

      // .addCase(resetFilteredAdverts.fulfilled, (state, action) => {
      //   // state.page = 1;
      //   state.filtersPage = 1;
      //   state.isLoading = false;
      //   state.adverts = action.payload; //
      //   state.isLoadMore = true;
      //   // if (action.payload.length < limit) state.isLoadMore = false;
      // })

      .addMatcher(
        isAnyOf(
          fetchAdverts.pending,
          fetchFilteredAdverts.pending
          // resetFilteredAdverts.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdverts.rejected,
          fetchFilteredAdverts.rejected
          // resetFilteredAdverts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const {
  addToFavorites,
  removeFromFavorites,
  increasePage,
  resetAdverts,
  hideLoadMoreFavs,
  resetFavsPage,
  resetAdvertsFavs,
  hideLoadMore,
  resetFilteredAdverts,
  addFilters,
} = advertsSlice.actions;

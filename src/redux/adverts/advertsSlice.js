import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertById } from './advertsOperations.js';

const initialState = {
  adverts: [],
  // advertById: null
  isLoading: false,
  error: null,
  page: 1,
  // isFavorite: false,
  favorites: [],
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    //----------------pages
    incrementPage: (state) => {
      state.page = state.page + 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },

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
      //-------DELETE ??--------fetchAdvertById
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

//toggleIsFavorite
export const { addToFavorites, removeFromFavorites, incrementPage, resetPage } =
  advertsSlice.actions;

// export const { incrementPage } = postsSlice.actions;

// export const advertsReducer = advertsSlice.reducer;

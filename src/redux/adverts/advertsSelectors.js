import { createSelector } from '@reduxjs/toolkit';

const selectAdverts = (state) => state.adverts;

export const selectIsLoading = createSelector(
  selectAdverts,
  (adverts) => adverts.isLoading
);

export const selectAllAdverts = createSelector(
  selectAdverts,
  (adverts) => adverts.adverts
);

export const selectError = createSelector(
  selectAdverts,
  (adverts) => adverts.error
);

export const selectFavorites = createSelector(
  selectAdverts,
  (adverts) => adverts.favorites
);

export const selectPage = createSelector(
  selectAdverts,
  (adverts) => adverts.page
);

export const selectIsLoadMore = createSelector(
  selectAdverts,
  (adverts) => adverts.isLoadMore
);

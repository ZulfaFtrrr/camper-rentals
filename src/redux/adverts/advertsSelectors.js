import { createSelector } from '@reduxjs/toolkit';

const selectAdverts = (state) => state.adverts;

export const selectIsLoading = createSelector(
  selectAdverts,
  (adverts) => adverts.isLoading //
);

export const selectAdvertById = createSelector(
  selectAdverts,
  (adverts) => adverts.advertById //
);

export const selectAllAdverts = createSelector(
  selectAdverts,
  (adverts) => adverts.adverts //
);

export const selectError = createSelector(
  selectAdverts,
  (adverts) => adverts.error //
);

// export const getLoading = (state) => state.auth.loading;

// export const getError = (state) => state.auth.error;

export const getAdverts = (state) => state.adverts;

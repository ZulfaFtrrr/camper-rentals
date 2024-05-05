import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { advertsSlice } from '../redux/adverts/advertsSlice';
import storage from 'redux-persist/lib/storage';

const advertsConfig = {
  key: 'adverts',
  storage,
  whitelist: ['adverts', 'favorites'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsConfig, advertsSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

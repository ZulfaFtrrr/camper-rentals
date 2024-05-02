import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetAdverts, apiGetAdvertById } from '../../services/adverts-api.js';

export const fetchAdverts = createAsyncThunk(
  'contacts/fetchAdverts',
  async (_, thunkApi) => {
    try {
      const adverts = await apiGetAdverts();
      return adverts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
      // toast !
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  'contacts/fetchAdvertById',
  async (id, thunkApi) => {
    try {
      const advert = await apiGetAdvertById(id);
      return advert;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
      // toast !
    }
  }
);

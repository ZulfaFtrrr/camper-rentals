import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiGetAdverts,
  apiGetFilteredAdverts,
} from '../../services/adverts-api.js';
import { toast } from 'react-toastify';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkApi) => {
    try {
      const adverts = await apiGetAdverts(page); //
      return adverts;
    } catch (error) {
      toast.error(error?.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdverts = createAsyncThunk(
  'adverts/fetchFilteredAdverts',
  async (params, thunkApi) => {
    try {
      const adverts = await apiGetFilteredAdverts(params);
      console.log('filtered adverts', adverts);

      return adverts;
    } catch (error) {
      if (error.response.status !== 404) toast.error(error?.message);

      if (error.response.status === 404) {
        toast.error('Sorry! We couldn`t find adverts you requested');
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const resetFilteredAdverts = createAsyncThunk(
  'adverts/resetFilteredAdverts',
  async (page, thunkApi) => {
    try {
      const adverts = await apiGetAdverts(page); //
      return adverts;
    } catch (error) {
      toast.error(error?.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

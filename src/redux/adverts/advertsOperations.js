import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetAdverts } from '../../services/adverts-api.js';
import { toast } from 'react-toastify';

export const fetchAdverts = createAsyncThunk(
  'contacts/fetchAdverts',
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

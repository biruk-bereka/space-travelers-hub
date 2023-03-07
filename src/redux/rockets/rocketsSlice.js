import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  allRockets: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const getRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(getRockets.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(getRockets.fulfilled, (state, action) => (
        {
          ...state,
          allRockets: action.payload,
          status: 'succeeded',
        }
      ));
  },
});
export const allRockets = (state) => state.rockets.allRocket;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;
export default rocketsSlice.reducer;

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
  const arr = [];
  for (let i = 0; i < response.data.length; i += 1) {
    const obj = {
      id: response.data[i].id,
      name: response.data[i].name,
      type: response.data[i].type,
      description: response.data[i].description,
      flickrImages: response.data[i].flickr_images,
      reserved: false,
    };
    arr.push(obj);
  }
  return arr;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      console.log('rocket id', rocketId);
      return {
        ...state,
        allRockets: state.allRockets.map((rocket) => {
          if (rocket.id === rocketId) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    },
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

export const { reserveRocket } = rocketsSlice.actions;
// export const getAllRockets = (state) => state.rockets.allRockets;
// export const getRocketsStatus = (state) => state.rockets.status;
// export const getRocketsError = (state) => state.rockets.error;
export const getRocketsObj = (state) => state.rockets;
export default rocketsSlice.reducer;

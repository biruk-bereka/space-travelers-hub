import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
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
    };
    arr.push(obj);
  }
  return arr;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addRocket: {
      reducer(state, action) {
        state.allRockets.push(action.payload);
      },
      prepare(name, type, flickrImages) {
        return {
          payload: {
            id: nanoid(),
            name,
            type,
            flickrImages,
          },
        };
      },
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
export const getAllRockets = (state) => state.rockets.allRockets;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;
export default rocketsSlice.reducer;

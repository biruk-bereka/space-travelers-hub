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
  return response.data;
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
export default rocketsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const missionsArray = (arr) => {
  const missions = arr.map((item) => {
    const { mission_id: missionID, mission_name: missionName, description } = item;
    return {
      missionID, missionName, description,
    };
  });
  return missions;
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const res = await axios.get(url)
      .then((response) => response.data);
    return missionsArray(res);
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: [...state.missions, ...action.payload],
        isLoading: false,
      }))
      .addCase(fetchMissions.rejected, () => 'rejected');
  },
});

export default missionsSlice.reducer;

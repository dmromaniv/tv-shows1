import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchTVShowData } from "@/services/tvmazeAPI";

export const getTVShows = createAsyncThunk(
  "tvShows/getTVShows",
  async (query, thunkAPI) => {
    try {
      const response = await fetchTVShowData(query);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

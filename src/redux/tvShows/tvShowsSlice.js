import { createSlice } from "@reduxjs/toolkit";

import { getTVShows } from "./tvShowsOperations";

const defaultState = {
  tvShowsData: null,
  isLoading: false,
  error: null,
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getTVShows.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTVShows.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tvShowsData = payload;
        state.error = null;
      })
      .addCase(getTVShows.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tvShowsReducer = tvShowsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import { tvShowsReducer } from "./tvShows/tvShowsSlice";

const store = configureStore({
  reducer: tvShowsReducer,
});

export default store;

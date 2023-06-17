import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constats/data";

const moviesSlice = createSlice({
  name: "movies",
  initialState: data,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    updateMovie: (state, action) => {
      if (state === data) {
        return action.payload;
      }
      return action.payload;
    },
  },
});

export const { addMovie, updateMovie } = moviesSlice.actions;
const movieReducer = moviesSlice.reducer;

export default movieReducer;

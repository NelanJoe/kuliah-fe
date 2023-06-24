import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constats/data";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: data,
    moviesLocals: data,
  },
  reducers: {
    addMovie: (state, action) => {
      state.moviesLocals.push(action.payload);
    },
    updateMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovie, updateMovies } = moviesSlice.actions;
const movieReducer = moviesSlice.reducer;

export default movieReducer;

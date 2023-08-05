import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload); // I can directly modify State, because Redux Toolkit has built in Immer library
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1); // 1, remove specific index of 'movie' the User clicked on
    },
  },
  // reset(state, action) {
  // returning what I want new State to be (I didn't change or modify the existing State)
  // return [];
  // }
  extraReducers(builder) {
    // it will watch for 'reset' Action, when that happens, it will run the following func
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

// 2 action creators and combined reducer
export const { addMovie, removeMovie } = movieSlice.actions; // actions is an Object, that's why I'm destructuring of these 2 from it
export const movieReducer = movieSlice.reducer; // direct reference to the Combined Reducer Function, then assigning it to the new Variable called movieReducer and then exporting That Variable

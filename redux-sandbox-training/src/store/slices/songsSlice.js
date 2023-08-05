import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

// slices automatically create reducers and action types
// slices are what save us from having to write out all this boilerplate (different action types, switch statements with cases)
const songsSlice = createSlice({
  // how slice knows what to run
  // the 'slice' is going to take the name of the slice 'song', then add in / and then then name of the func 'addSong'
  // 'song' + '/' + 'addSong' = 'song/addSong'
  // same thing for other functions 'song/removeSong'
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      // STATE IS NOT THE BIG STATE OBJ IN THE STORE, IT'S THE PIECE OF SMALL PIECE OF STATE MANAGED BY THIS REDUCER
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // whenever this Slice is created by Redux Toolkit, this extraRerucers() is going to be called automatically
  // builder - is an Object that tells the Combined Reducer to watch for some additional Action Types, this tell songSlice and the Combined Reducer it creates that there are some additonal Action Types it should care about
  extraReducers(builder) {
    // whenever it sees an Action with a Type of 'movie/reset' , it needs to update it's state
    //builder.addCase("movie/reset", (state, action) => {
    // builder.addCase(movieSlice.actions.reset, (state, action) => {
    // state.push('new song 2') - if I wanted to update the State
    // return []; // the State will be an Empty Array
    // });
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

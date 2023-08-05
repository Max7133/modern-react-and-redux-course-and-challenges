import { configureStore } from '@reduxjs/toolkit';
// importing the 2 Combined Reducers that I need in here to connect and create to the Redux Store
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice';
import { reset } from './actions';

const store = configureStore({
  // 2 Reducer func inside of an Reducer Object
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
});

//const startingState = store.getState();
//console.log(JSON.stringify(startingState));

//store.dispatch(
// {
//type: "song/addSong", // that's why this 'action type' is special! This action type matches the upper reducer func song' + '/' + 'addSong' = 'song/addSong'
//payload: "New Song!!!"
// }
//songsSlice.actions.addSong("Some song!")
//); // same thing with Action Creator
// Action Creators - shortcut, that creates action Objects for us automatically so we don't have to memorize these types - type: 'songs/addSong'
// If I want to pass along a Payload, ill add it as the 1st and only Arg
// All these Action Creators can be accessed on the somethingSlice.actions Property, and the name of those Action Creators is going to be exactly whatever the name of the Reducers are.

//const finalState = store.getState();
//console.log(JSON.stringify(finalState));

export { store };
// exporting Action Creators from movieSlice and songsSlice files from this index.js file (so that src/index.js will be a Central Point for Everything related to Redux)
export { reset, addSong, removeSong, addMovie, removeMovie };

//export const { addMovie, removeMovie, reset } = movieSlice.actions;

// what gets console.log by toString() - is the exact String (Action type) that I need that corresponds to this 'reset Reducer' Action type, the entire idea of reseting
// I will use this instead of typing the String in builder.addCase("movie/reset"
// console.log(movieSlice.actions.reset.toString()); // movie/reset

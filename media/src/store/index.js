// This serves as a Central Export Point for everything related to the Redux stuff
// (So that the Components DON'T have to Import from those deeply Nested Slices files)
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';

export const store = configureStore({
  reducer: {
    // key of 'users'
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, //  [albumsApi.reducerPath] - means go and look up the 'reducerPath' Property
  },
  // function that gets called with an Arg of 'getDefaultMiddleware'
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

// 1 time setup
setupListeners(store.dispatch);

// exporting Thunk from fetchUsers (find everything that gets exported from fetchUsers file and export it from this index.js file as well)
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';

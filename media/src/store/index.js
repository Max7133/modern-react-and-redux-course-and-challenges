// This serves as a Central Export Point for everything related to the Redux stuff
// (So that the Components DON'T have to Import from those deeply Nested Slices files)
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
// whenever I create the API, a Slice is generated for us automatically and the Slice in turn creates a Reducer (I have to connect the Reducer to the store here below)
// whenever I create the API, a set of 'middleware' is also created automatically (I have to connect it to the Store here below)
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    // key of 'users'
    users: usersReducer,
    // CONNECTING the Reducer to the Store
    [albumsApi.reducerPath]: albumsApi.reducer, //  [albumsApi.reducerPath] - means go and look up the 'reducerPath' Property
    [photosApi.reducerPath]: photosApi.reducer,
  },
  // function that gets called with an Arg of 'getDefaultMiddleware'
  middleware: getDefaultMiddleware => {
    // CONNECTING the 'middleware' inside the 'middleware Function'
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

// 1 time setup (Store Listener)
setupListeners(store.dispatch);

// exporting Thunk from fetchUsers (find everything that gets exported from fetchUsers file and export it from this index.js file as well)
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
// Export the Hooks
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';

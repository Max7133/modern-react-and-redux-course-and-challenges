// This serves as a Central Export Point for everything related to the Redux stuff
// (So that the Components DON'T have to Import from those deeply Nested Slices files)
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    // key of 'users'
    users: usersReducer,
  },
});

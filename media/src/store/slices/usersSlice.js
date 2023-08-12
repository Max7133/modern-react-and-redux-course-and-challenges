import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false, // default value
    error: null, // default value
  },
  reducers: {}, // usersSlice is not going to make use of this 'reducers' Property at all
});

// Exporting the Combined Reducer that is created when the Slice is made
export const usersReducer = usersSlice.reducer;

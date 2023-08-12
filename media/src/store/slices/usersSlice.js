import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {}, // usersSlice is not going to make use of this 'reducers' Property at all
});

// Exporting the Combined Reducer that is created when the Slice is made
export const usersReducer = usersSlice.reducer;

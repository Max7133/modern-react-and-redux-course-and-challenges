import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false, // default value
    error: null, // default value
  },
  //reducers: {}, // usersSlice is not going to make use of this 'reducers' Property at all
  // extraReducers - allows to watch for some very particular, additional Action Types, to watch for actions being dispatched that are not inherently tied to this Slice
  extraReducers(builder) {
    ////// fetchUsers
    // I want it to watch for 3 particular Action Types, that are 'pending', 'fulfilled', 'rejected'
    builder.addCase(fetchUsers.pending, (state, action) => {
      // 2 Arg - Reducer Function - what gets executed any time it sees an Action with these particular Action Types
      // Update the State Object however appropriate to show the user that the Data is LOADING
      state.isLoading = true;
    }); // fetchUsers, after creating a Thunk inside there, is going to have these 3 Properties automatically assigned to it
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload; // adding this instead of data: []
    }); // example, this is === to 'users/fetch/fulfilled' <-- Automatically Generated Action Type
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error; // automatically created Error Object, adding this instead of error: null
    });
    ////// addUser
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload); // adding random generated user from 'addUser' to the 'data' []
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    ////// removeUser
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // FIX
      console.log(action);
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

// Exporting the Combined Reducer that is created when the Slice is made
export const usersReducer = usersSlice.reducer;

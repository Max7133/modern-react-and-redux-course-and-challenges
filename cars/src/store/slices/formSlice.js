import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  // initialState will be an Object, because formSlice is going to keep track of 2 separate Properties
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    // when updating Name/Cost, I need to dispatch an action that has a Payload Property
    changeName(state, action) {
      state.name = action.payload; // going to tell what's the new NAME will be
    },
    changeCost(state, action) {
      state.cost = action.payload; // going to tell what's the new COST will be
    },
  },
});

// 2 Action Creators that got generated automatically
export const { changeName, changeCost } = formSlice.actions;
// export the Combined Reducer
export const formReducer = formSlice.reducer; // NOT reducerS, because this a SIGNLE, COMBINED REDUCER

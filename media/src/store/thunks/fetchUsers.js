import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// CREATING THUNK
// 1st arg - string (a Base Type, that describes the purpose of the request), also it generates types there such as 'pending'
// at the end it's going to add in 'pending' users/fetch/pending <-- that's the Action Type that is going to be automatically dispatched when I initially make the Request
// instead of 'users/fetch' I could add anything I want, it's meaningless, but I should add it still, if I want to debug the code later one, and know what is this Thunk Function is for
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  // fetching, and returning the data that I want to use inside of usersSlice
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY !!!
  await pause(10000);

  // whatever I return here - is going to be automatically assigned to the Payload Property of the 'fulfilled' Action Type, PAYLOAD [{ id:1, name: 'Myra' }]
  return response.data; // I want to use this data in the Reducer for updating State
});

// IN DEV ONLY (Helper Function) !!!
// for adding in an arbitrary small PAUSE after I make the request to the server
const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// adding the 'user' argument (user Object that has an ID and NAME Property) so it can delete the ID of the user that I want to delete
const removeUser = createAsyncThunk('users/remove', async user => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  return response.data; // FIX
});

export { removeUser };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// adding the 'user' argument (user Object that has an ID and NAME Property) so it can delete the ID of the user that I want to delete
const removeUser = createAsyncThunk('users/remove', async user => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIX
  // THE REASON:
  // whetever I return show up as 'action.payload' inside of the Reducer
  // when I send the DELETE request off to the JSON server, ther respone is going to be an Empty Object
  // so when returning 'response.data', I'm returning an EMPTY OBJECT, therefore I don't have any info on who supposed to be deleted!
  return response.data;
});

export { removeUser };

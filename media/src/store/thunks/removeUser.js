import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// adding the 'user' argument (user Object that has an ID and NAME Property) so it can delete the ID of the user that I want to delete
const removeUser = createAsyncThunk('users/remove', async user => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIX
  // THE REASON:
  // whetever I return show up as 'action.payload' inside of the Reducer
  // when I send the DELETE request off to the JSON server, ther respone is going to be an Empty Object
  // so when returning 'response.data', I'm returning an EMPTY OBJECT, therefore I don't have any info on who supposed to be deleted!
  // THE FIX ITSELF IS BELOW
  //return response.data;
  return user; // now the PAYLOAD is going to be the ID and the NAME of whoever user was just deleted
  // now it's much easirt to go through that 'data' Array of Users and find that particular User that I'm trying to delete
});

export { removeUser };

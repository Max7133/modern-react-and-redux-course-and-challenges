import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store';

function UsersList() {
  const dispatch = useDispatch();

  // will run automatically when the 1st time the Coomponent is rendered onto the screen
  useEffect(() => {
    // Running Thunk
    dispatch(fetchUsers());
  }, [dispatch]); // usually just [] is fine, used [dispatch] so the ESLint error will go away
  return 'Users List';
}

export default UsersList;

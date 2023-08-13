import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();
  // useSelector - Accessing State inside of a Component
  // state - Big State Object
  const { isLoading, data, error } = useSelector(state => {
    return state.users; // 'users' portion of State { data: [], isLoading false, error: null }
  });

  // will run automatically when the 1st time the Coomponent is rendered onto the screen
  useEffect(() => {
    // Running Thunk
    dispatch(fetchUsers());
  }, [dispatch]); // usually just [] is fine, used [dispatch] so the ESLint error will go away

  if (isLoading) {
    return <Skeleton times={6} />; // show 6 gray boxes
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return <div>{data.length}</div>; // how many Users exist inside of the 'data' Array
}

export default UsersList;

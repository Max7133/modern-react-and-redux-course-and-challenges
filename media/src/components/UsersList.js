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
    // h-10 - a Height of 10 rem
    // w-full - expand in the X direction as much as possible
    return <Skeleton times={6} className="h-10 w-full" />; // show 6 gray boxes
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  // TEMPORARY - will have a separate component for this later
  const renderedUsers = data.map(user => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return <div>{renderedUsers}</div>; // how many Users exist inside of the 'data' Array
}

export default UsersList;

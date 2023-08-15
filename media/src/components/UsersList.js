import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  // whether or not it's loading the big list of users (for showing and not showing the skeleton loader Comp)
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);
  const dispatch = useDispatch();
  // useSelector - Accessing State inside of a Component
  // state - Big State Object
  const { data } = useSelector(state => {
    return state.users; // 'users' portion of State { data: [], isLoading false, error: null }
  });

  // will run automatically when the 1st time the Component is rendered onto the screen
  useEffect(() => {
    setIsLoadingUsers(true); // updates State
    // Running Thunk
    // starts the request
    // unwrap() - is going to give a brand new Promise back, and the Promise it gives back is going to follow the CONVENTIONAL RULES
    // dispatch RULES - .then() is called when the request is FULFILLED or REJECTED
    // CONVENTIONAL RULES - .then() ONLY if the request is FULFILLED and .catch() ONLY if the request REJECTED
    dispatch(fetchUsers())
      .unwrap()
      //.then(() => setIsLoadingUsers(false)) // I DON'T NEED IT BECAUSE OF finally(), it will run no mater what at the end
      .catch(
        err => setLoadingUsersError(err)
        //setIsLoadingUsers(false);
      )
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]); // usually just [] is fine, used [dispatch] so the ESLint error will go away

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    // Running Thunk
    // adds ran gen user to the user list (data: []) from 'usersSlice'
    dispatch(addUser())
      .unwrap()
      .catch(err => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    // h-10 - a Height of 10 rem
    // w-full - expand in the X direction as much as possible
    return <Skeleton times={6} className="h-10 w-full" />; // show 6 gray boxes
  }

  // if is not null
  if (loadingUsersError) {
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

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          'Creating User...'
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && 'Error creating user...'}
      </div>
      {renderedUsers}
    </div>
  ); // how many Users exist inside of the 'data' Array
}

export default UsersList;

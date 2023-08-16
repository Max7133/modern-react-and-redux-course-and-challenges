import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';

function UsersList() {
  // whether or not it's loading the big list of users (for showing and not showing the skeleton loader Comp)
  //const [doFetchUsers, isLoadingUsers] = useState(false);
  //const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  // useSelector - Accessing State inside of a Component
  // state - Big State Object
  const { data } = useSelector(state => {
    return state.users; // 'users' portion of State { data: [], isLoading false, error: null }
  });

  // will run automatically when the 1st time the Component is rendered onto the screen
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]); // usually just [] is fine, used [doFetchUsers] so the ESLint error will go away

  const handleUserAdd = () => {
    // Running Thunk
    // adds ran gen user to the user list (data: []) from 'usersSlice'
    doCreateUser();
  };

  // TEMPORARY - will have a separate component for this later
  // the 'content' variable is going to be what is showing in the <body></body> of the page, and the 'header' is always going to be visible
  let content;
  if (isLoadingUsers) {
    // h-10 - a Height of 10 rem
    // w-full - expand in the X direction as much as possible
    content = <Skeleton times={6} className="h-10 w-full" />; // show 6 gray boxes
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
    // if not loading users and their is no error, assign the user list
  } else {
    content = data.map(user => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  ); // how many Users exist inside of the 'data' Array
}

export default UsersList;

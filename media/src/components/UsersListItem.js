import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

// the Arg receives a Prop of the 'user' Object from UsersList comp
function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {/* loading={isLoading} - shows spinner */}
          <Button
            className="mr-3"
            loading={isLoading}
            onClick={handleUserRemove}
          >
            <GoTrash />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;

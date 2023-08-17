import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

// the Arg receives a Prop of the 'user' Object from UsersList comp
function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleUserRemove = () => {
    doRemoveUser(user);
  };

  // <></> - Fragment that allows to write out a little bit of JSX (or grouping JSX), and when it gets displayed a new HTML Element is not going to be created
  const header = (
    <>
      {/* loading={isLoading} - shows spinner */}
      <Button className="mr-3" loading={isLoading} onClick={handleUserRemove}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      {/* I have received a Prop of 'user' in UsersListItem, so I'm passing this Prop here directly */}
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;

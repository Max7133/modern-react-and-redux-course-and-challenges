import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';

function AlbumsListItem({ album }) {
  // results Object - status of mutation
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    // Fragment for show everything on the same line
    <>
      {/* as the album is in a deleting process, I will disable it to show some kind of loading*/}
      {/* using 'results' Object to understand when the mutation is actually being executed, by passing a 'loading' Prop */}
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    // ExpandablePabel needs a 'header' Prop
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;

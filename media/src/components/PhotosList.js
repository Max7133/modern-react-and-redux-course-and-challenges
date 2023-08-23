// Whenever PhotosList shows on the screen, it will make a request and get all the different Photos for this particular 'album' PhotosList({ album })
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';

// Whenever I show PhotosList, I'm expecting to receive an 'album' as a Prop
function PhotosList({ album }) {
  useFetchPhotosQuery(album); // from ASSUMPTIONS, when I call the 'query' or those 2 Mutations, I have to provide an Arg of 'album' (it will take it and sent of to 'fetchPhotos' query function Endpoint)
  // running 'mutation Hook' that's going to give me back an Array with a couple of Elements
  // I'm intrested in these (I called the 'results' Object - addPhotoResults)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album); // whenever it runs this ENDPOINT, I need to provide the 'album' because my ENDPOINT is entirely configured to expect to receive an 'album' (it's going to use that 'album' to configure the Request)
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        {/*This button displayes the loading spinner and disables itself whenever 'addPhotoResults' isLoading = true */}
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
}

export default PhotosList;

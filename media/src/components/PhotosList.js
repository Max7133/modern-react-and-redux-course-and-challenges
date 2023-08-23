// Whenever PhotosList shows on the screen, it will make a request and get all the different Photos for this particular 'album' PhotosList({ album })
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

// Whenever I show PhotosList, I'm expecting to receive an 'album' as a Prop
function PhotosList({ album }) {
  // whenever I call 'useFetchPhotosQuery' Hook, it gets back the 'results Object'
  // destructuring 'results Object'
  const { data, isFetching, error } = useFetchPhotosQuery(album); // from ASSUMPTIONS, when I call the 'query' or those 2 Mutations, I have to provide an Arg of 'album' (it will take it and sent of to 'fetchPhotos' query function Endpoint)
  // running 'mutation Hook' that's going to give me back an Array with a couple of Elements
  // I'm intrested in these (I called the 'results' Object - addPhotoResults)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album); // whenever it runs this ENDPOINT, I need to provide the 'album' because my ENDPOINT is entirely configured to expect to receive an 'album' (it's going to use that 'album' to configure the Request)
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    // 'data' - Array of 'photos', and for each individual photo it will show a 'photosListItem'
    content = data.map(photo => {
      // because it builds a list, I need to provide a 'key' Prop and the 'photo' itself as a Prop, so that the Component itself show some info about the 'photo'
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        {/*This button displayes the loading spinner and disables itself whenever 'addPhotoResults' isLoading = true */}
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flew-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;

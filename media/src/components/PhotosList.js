// Whenever PhotosList shows on the screen, it will make a request and get all the different Photos for this particular 'album' PhotosList({ album })
import { useFetchPhotosQuery } from '../store';
// Whenever I show PhotosList, I'm expecting to receive an 'album' as a Prop
function PhotosList({ album }) {
  useFetchPhotosQuery(album); // from ASSUMPTIONS, when I call the 'query' or those 2 Mutations, I have to provide an Arg of 'album' (it will take it and sent of to 'fetchPhotos' query function Endpoint)

  return 'PhotosList';
}

export default PhotosList;

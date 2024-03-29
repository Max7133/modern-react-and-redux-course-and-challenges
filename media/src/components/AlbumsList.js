import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';

// whenever this Comp is 1st rendered on the screen, it will fetch all the different albums tied to this particular user
function AlbumsList({ user }) {
  // calling the Hook (immediately fetches list of Albums)
  // Returned from this Hook, it's gonna give back an Object, where 3 different Properties that I care about
  // data - actual data I've got from the API
  // error - null (if everything is ok) or an Error Object (if something went wrong)
  // isLoading - is going to be a Boolean true or false (true - if I'm currently in the process of making the request (FIRST TIME ONLY))
  // isFetching - (true - if I'm currently in the process of making the request)
  // refetch - function tell the Query to re-run
  // (user) - agrument to pass the 'query' function in the 'albumsApi' (line 25)
  // I had to pass in a (user) because I had to specify exactly which 'users albums' I'm looking for
  const { data, error, isFetching } = useFetchAlbumsQuery(user); // I don't have to put it inside useEffect() or inside the Click Event Handler
  const [addAlbum, results] = useAddAlbumMutation(); // results is similiar to the upper 'results' Object that I have destructured, it contains (isError, isLoading, isSuccess, isUninitialized)
  //// QUERIES - run immediately when the component is displayed on the screen (by default)
  // whenever the QUERY HOOK is called, it's going to get back the 'results' Object (that I have destructured in to data, error, isLoading) along with the actual data that was fetched
  //// MUTATIONS - give you a function to run when you want to change some data

  const handleAddAlbum = () => {
    // whatever I'm passing here in 'addAlbum(...)', that will show up as the 3rd Arg in the 'invalidatesTags' addAlbum endpoint in 'albumsApi'
    addAlbum(user); // passing the 'user' that I want to tie the album to
  };

  let content;
  if (isFetching) {
    // className="h-10 w-full" times={3} for showing the skeleton boxes loader when expanding the user and it fetches the albums
    content = <Skeleton className="h-10 w-full" times={3} />; // whenever I show 'Skeleton' I need to pass in the 'times' Prop (how many Skeleton boxes it needs to show)
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;

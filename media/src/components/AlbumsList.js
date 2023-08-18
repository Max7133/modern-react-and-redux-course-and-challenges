import { useFetchAlbumsQuery } from '../store';

// whenever this Comp is 1st rendered on the screen, it will fetch all the different albums tied to this particular user
function AlbumsList({ user }) {
  // calling the Hook (immediately fetches list of Albums)
  // Returned from this Hook, it's gonna give back an Object, where 3 different Properties that I care about
  // data - actual data I've got from the API
  // error - null (if everything is ok) or an Error Object (if something went wrong)
  // isLoading - is going to be a Boolean true or false (true - if I'm currently in the process of making the request)
  const { data, error, isLoading } = useFetchAlbumsQuery(user); // I don't have to put it inside useEffect() or inside the Click Event Handler

  console.log(data, error, isLoading);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;

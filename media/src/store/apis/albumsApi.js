import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // needs to end with /react, so 'createApi' will create Custom Hooks
import { faker } from '@faker-js/faker';

// IN DEV ONLY (Helper Function) !!!
// for adding in an arbitrary small PAUSE after I make the request to the server and show the loading spinner on the + Add Album button
const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

// when this R.T.Q. API is created, it's going to automatically create a Slice (I don't need to interact with it in any way), Thunks, Action Creators behind the scenes and set of Auto Gen Hooks
// the Slice is used to store a ton of State related to all the different requests that are being issued, the data they fetch, the status of those requests, errors and so on
// all this State needs to be stored somewhere inside of the Redux Store and I use this 'reducerPath' to specify that
// 'baseQuery' - needed for the Redux Toolkit Query Api, to know how and where to send requests
// 'fetchBaseQuery' - pre-configured version of 'fetch' from R.T.Q. ready to make requests
// 'endpoints' - tells R.T.Q. explicitly exactly how to make each of the requests that I want to make (for e.g. how to make request to go and fetch a list of albums, create album, delete album)
// fetchAlbums - key that is used as a template for deciding what the name of a Hook should be, now I have access to a Hook - albumsApi.useFetchAlbumsQuery()

//// THIS IS THE R.T.Q. API
const albumsApi = createApi({
  ////// This is 'reducerPath' (Property on the BIG STATE OBJECT where all of the API State should be maintained)
  // albums: {}
  reducerPath: 'albums', // can be any name
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    // fetch function - that is build directly into the browser to make request (rarely needed to use and overwrite)
    fetchFn: async (...args) => {
      // IN DEV ONLY
      await pause(1000);
      return fetch(...args);
    },
  }),
  // function that's going to be called automatically with the 'builder' Argument
  endpoints(builder) {
    // configuration Object (detailing different kidns of requests I want to make)
    return {
      //// 3rd endpoint
      // When it removes an album, it will return an Object that looks like { type: 'Album', album.id } (the id of the 'album' that got deleted) from 'invalidatesTags: ()'
      // it will match up with one of the Objects with type: 'Album', and whenver it matches up with at least one of these Objects, it's going to Invalidate the entire Query
      removeAlbum: builder.mutation({
        // this time 'album', because that is what I provided to the mutation function when I called it
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.id }];
        },
        // run this mutation with the 'album' object I want to delete
        query: album => {
          // album Object have IDs and titles assigned to them
          // using that ID specifically when I'm putting together the URL for this request
          return { url: `albums/${album.id}`, method: 'DELETE' };
        },
      }),
      //// 2nd endpoint
      // Whenever it successfully adds an 'album', it will INVALIDATE all the TAGS with the type of 'UsersAlbums' and the 'user.id'
      addAlbum: builder.mutation({
        // 3rd Arg is whatever I pass into the Mutation, const handleAddAlbum = () => { addAlbum(user); }; - in AlbumsList.js
        invalidatesTags: (result, error, user) => {
          // when this Mutation runs, it's going to find all the Queries that have a Tag of { type: 'UsersAlbums', id: user.id }, marks them out of date, and those Queries are going to be executed again
          return [{ type: 'UsersAlbums', id: user.id }];
        },
        // for changing data, still needs a 'query' function (query, more like tell R.T.Q. about some Parameters to use for the request)
        // (user) Arg - when making the request, it needs to know what (user) I want to tie this album to
        query: user => {
          return {
            url: './albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(), // random gen name
            },
          };
        },
      }),
      //// 1st endpoint
      fetchAlbums: builder.query({
        // TAG SYSTEM
        // 3 default Arg, result - that object, error, user (usually it's called 'arg'), conceptually for me it's the 'user' record
        // so the 3rd Arg is going to be whatver I have passed to my Hook, when I called it back inside of the Components
        // { id:1, name: 'Myra' } - that's the 'arg' (argument) - for me the 'user' record, so whatever I pass there, it's going to show up as the 3rd Arg in the 'providesTags'
        // result, error I'm going to receive, but I don't need them in THIS Project
        providesTags: (result, error, user) => {
          // result - the data that I get back the backend server (list of Albums)
          // mapping over the albums I get, for every 'album' it fetches it's going to merge them into a bigger Object
          const tags = result.map(album => {
            return { type: 'Album', id: album.id };
          }); // groups the Tags, 1 for each 'album'
          tags.push({ type: 'UsersAlbums', id: user.id }); // adding on top
          return tags;
        },
        // property (Exactly how it needs to make a request - goal of 'query')
        query: user => {
          // user Obj from JSON server with id: and name:
          // another config Obj
          return {
            // returns details to tell R.T.Q. how to make a request to fetch the list of Albums
            url: '/albums',
            params: {
              userId: user.id, // takes 'userId' as a Key, and assigns to it 'user.id', ?userId=user.id (?userId=1)
            },
            method: 'GET',
            // In this case no BODY for the request, so I didn't have to add it here to this Object
          };
        },
      }),
    };
  },
});

// Exporting generated Hook for fetching the list of albums
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi }; // exporting the 'albumsApi' itself

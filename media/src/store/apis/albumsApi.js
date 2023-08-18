import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
  // function that's going to be called automatically with the 'builder' Argument
  endpoints(builder) {
    // configuration Object (detailing different kidns of requests I want to make)
    return {
      fetchAlbums: builder.query({
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
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi }; // exporting the 'albumsApi' itself

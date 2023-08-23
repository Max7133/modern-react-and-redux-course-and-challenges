import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // needs to end with /react, so 'createApi' will create Custom Hooks
import { faker } from '@faker-js/faker';

const photosApi = createApi({
  // setting the reducerPath (where the 'reducer' is going to be assigned inside of the Global State Object)
  reducerPath: 'photos',
  // to define the 'baseQuery', it first needs to be import the 'fetchBaseQuery' on the top
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  // List of ENDPOINTS
  endpoints(builder) {
    return {
      // each of these 3 Objects, has a 'query' function, for customizing the Request that R.T.Q. is going to make automatically
      fetchPhotos: builder.query({
        // ASSUMPTION: I assume that when I run this 'query', I'm going to provide an 'album' Object to it (the 'album' that I want to fetch the photos for.)
        // when I provide the query, that 'album' Object, it's going to show up as the 1st Arg inside the 'query' function
        query: album => {
          return {
            url: 'photos',
            // 'params' Obj for defining the 'query string'
            params: {
              albumId: album.id, // the reference of the ID of some 'album'
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        // I need to know WHICH 'album' I'm creating the photo for
        // ASSUMPTION: I assume when I run this 'mutation', I will provide a 'album' Object, and then I can reference the 'album.Id' there
        query: album => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              // FAKER LIBRARY will specify the URL with the photo itself
              url: faker.image.abstract(150, 150, true), // 150 Width, 150 Height, true - random photo
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        // ASSUMPTION: I assume when I run this 'mutation', I will provide a 'photo' Object - some photo I want to DELETE.
        query: photo => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

// Export all of the automatically generated Hooks along with the 'photosApi' itself
export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi }; // so I can connect it to the Redux Store

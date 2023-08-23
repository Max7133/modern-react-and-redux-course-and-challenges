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
        // 3rd Arg is 'arg' but usually it is whatever I had provided to my 'query' hook, and that's the 'album'
        providesTags: (result, error, album) => {
          // building the list of Tags by mapping over the 'result'
          const tags = result.map(photo => {
            // For every single 'photo' I will return an Object with a type of 'Photo' and an ID of the 'photo.id'
            return { type: 'Photo', id: photo.id };
          });
          // adding to the very end of that Array 1 more Object
          tags.push({ type: 'AlbumPhoto', id: album.id }); // id: Albums Id
          return tags;
        },
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
        invalidatesTags: (result, error, album) => {
          // whenever it adds a photo, it will return something like { type: 'AlbumPhoto', id: 10 }
          return [{ type: 'AlbumPhoto', id: album.id }];
        },
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
        // 3rd Arg is 'photo' in this case (line 65), because the Value that is flowing into the endpoint is going to be the 'photo' Object
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photo', id: photo.id }];
        },
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

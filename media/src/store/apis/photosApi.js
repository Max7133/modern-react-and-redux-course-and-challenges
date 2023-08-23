import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

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
      fetchPhotos: builder.query({}),
      addPhoto: builder.mutation({}),
      removePhoto: builder.mutation({}),
    };
  },
});

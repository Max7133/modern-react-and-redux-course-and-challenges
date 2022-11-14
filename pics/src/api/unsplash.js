import axios from 'axios';

// create() Method is going to create a instance of the Axios client with some Default Properties
// axios.create() allows to create a customized copy of it, that is just customzed towards making Request to some specific URL with these Headers
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID KEY',
  },
});

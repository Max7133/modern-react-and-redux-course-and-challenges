import { useContext } from 'react';
import BooksContext from '../context/books';

// Custom Hook
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;

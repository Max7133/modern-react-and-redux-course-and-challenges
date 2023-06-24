import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  // Out of this big BooksContext Object, the only thing I'm going to Destructure out of it is the "fetchBooks Function"
  const { fetchBooks } = useContext(BooksContext); // This is going to give the entire Object "BookContext" that I'm trying to share

  // useEffect() is called 1 time when the component is first rendered
  // second argument [], is for follow up renders if needed
  // [] - the Arrow Function inside useEffect will never be called again
  // [counter] - the Arrow Function inside useEffect will be called again if the "counter" value changes
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]); // fetchBooks won't be called again after the first render because of useCallback()

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

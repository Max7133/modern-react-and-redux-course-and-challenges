import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  // receives whatever title of a book user has entered
  const createBook = title => {};

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  // it will go throgh Array of books, and find the id I want to delete
  const deleteBookById = id => {
    // filter() - gives new Array
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // receives whatever title of a book user has entered
  const createBook = title => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

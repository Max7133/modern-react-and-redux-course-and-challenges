import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // takes all the existing Properties from the "book" & puts the new title in
      }
      return book; // otherwise return book
    });
    setBooks(updatedBooks); // after creating this new Variable of updatedBooks I set that State with it
  };

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
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

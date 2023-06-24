import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

// Custom Provider Component
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // makes a network request and gets a list of books
  // useCallback will tell React that the "fetchBooks" function doesn't change after rerenders, thus useEffect won't run it again
  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle, // the body of the request "title" Property, which I receice from this Function as an Argument "newTitle"
    });

    const updatedBooks = books.map(book => {
      if (book.id === id) {
        // takes all the different Properties out of the "book" Object from the API response, take all the different Key Value Pairs, and add them into this new Object { ...book, ...response.data };
        return { ...book, ...response.data };
      }
      return book; // otherwise return book
    });
    setBooks(updatedBooks); // after creating this new Variable of updatedBooks I set that State with it
  };

  // it will go throgh Array of books, and find the id I want to delete
  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    // filter() - gives new Array
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // receives whatever title of a book user has entered
  const createBook = async title => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    // takes all of "books", add them to this new Array, in the end of it add in the data from the response
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    // if the Key is identical to the Value then (books: books === books)
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };
  // value - Prop
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

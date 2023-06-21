import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList() {
  // Reaching out to the Context Object "BooksContext" to get the list of books "books"
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />; // render book
  });
  return <div className="book-list">{renderedBooks}</div>; // list of rendered books
}

export default BookList;

import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  // Reaching out to the Context Object "BooksContext" to get the list of books "books"
  const { books } = useBooksContext();

  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />; // render book
  });
  return <div className="book-list">{renderedBooks}</div>; // list of rendered books
}

export default BookList;

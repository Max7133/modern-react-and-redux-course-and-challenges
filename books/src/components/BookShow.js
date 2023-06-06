import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false); // I don't want to showEdit by default

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // flips to the opposite it currently is
  };

  // Depending on the Value of showEdit, it will assign a Variable either "book.title" or an instance of the bookEdit component
  let content = <h3>{book.title}</h3>;
  // If showEdit is true
  if (showEdit) {
    content = <BookEdit onEdit={onEdit} book={book} />; // Display BookEdit component with "book" Prop, intead of "book.title"
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        {/* This is for showing "pencil" icon */}
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;

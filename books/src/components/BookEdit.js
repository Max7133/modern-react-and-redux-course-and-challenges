import { useState } from 'react';

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title); // default Value

  // This will be called whenever a user changes the text inputs
  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // getting the Id and Title from "book" Prop
    onEdit(book.id, title);
  };

  return (
    // Whenever a user presses the ENTER key or clicks on the Button to submit the form
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      {/* Assigning the "title" & "handleChange" event handler to the Input element */}
      <input className="input" value={title} onChange={handleChange} />
      {/* Whenever a user presses the ENTER key or clicks on the Button to submit the form */}
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;

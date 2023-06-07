import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title); // default Value

  // This will be called whenever a user changes the text inputs
  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(book.id, title); // it will run handleSubmit
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

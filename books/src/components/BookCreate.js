import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  // keeps track when user changes the input
  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onCreate(title);
    setTitle(''); // clear form once it is submitted
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create Book!</button>
      </form>
    </div>
  );
}

export default BookCreate;

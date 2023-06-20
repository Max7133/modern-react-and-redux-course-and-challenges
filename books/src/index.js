import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// value={5} is the data "5" that's going to be shared using "CONTEXT" to all of the Child Components of the App Component that is within <BooksContext.Provider> <App /> </BooksContext.Provider>
root.render(
  // The App is going to show up as a Prop to a Provider called "children" */}
  <Provider>
    <App />
  </Provider>
);

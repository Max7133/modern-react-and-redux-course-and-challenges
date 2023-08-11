import 'bulma/css/bulma.css';
import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
// connecting Redux to React
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  // Provider and Store prop for connecting React to Redux
  <Provider store={store}>
    <App />
  </Provider>
);

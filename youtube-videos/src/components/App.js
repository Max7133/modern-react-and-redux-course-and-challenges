import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;

// ui container will remove fullscreen width of the input field

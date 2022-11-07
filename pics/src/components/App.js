import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../components/SearchBar";

class App extends React.Component {
  // Callback Function
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSubmitOnChangeWhateverNameCanChangeOnlyInMyCustomComponentsLikeSearchBar={
            this.onSearchSubmit
          }
        />
      </div>
    );
  }
}

export default App;

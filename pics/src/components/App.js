import React from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

class App extends React.Component {
  // Callback Function
  onSearchSubmit(term) {
    //console.log(term);
    // GET Request with Axios (1st arg: Address, 2nd arg: Object with options)
    // Params specifies different Query string parameters that I want to add into this request.
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID MY_KEY",
      },
    });
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

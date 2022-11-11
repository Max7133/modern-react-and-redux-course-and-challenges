import React from "react";
import SearchBar from "../components/SearchBar";
import unsplash from "../api/unsplash.js";
import ImageList from "./ImageList";

class App extends React.Component {
  // Init State with default value of Empty Array
  state = { images: [] };

  // Callback Function
  onSearchSubmit = async (term) => {
    //console.log(term);
    // GET Request with Axios (1st arg: Address, 2nd arg: Object with options)
    // Params specifies different Query string parameters that I want to add into this request.
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    // FIRST METHOD of getting the response from async request
    //.then((response) => console.log(response.data.results));

    // Updating State
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSubmitOnChangeWhateverNameCanChangeOnlyInMyCustomComponentsLikeSearchBar={
            this.onSearchSubmit
          }
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

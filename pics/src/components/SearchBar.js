import React from "react";

class SearchBar extends React.Component {
  // when typing something to the Input, this Callback is going to be invoked (with 1 arg being passed to it automatically)
  // Naming Rule: ON the name of the element that we are assigning this callback to, IN (input), and then the Event that we are watching for.
  // onInputChange(e) {
  //   e.target.value; // contains the Text that the User just added to the Input
  // }
  // <input type="text" onChange={this.onInputChange} />

  // Initializing State
  // State is an Object that has a single Property 'term' (empty String by default)
  state = { term: "" };
  // After initializing the State it has a single Property 'term' that starts off as an Empty String
  // And then every single time a User types inside that Input, the State is going to be updated ('term' Property)

  onFormSubmit = (e) => {
    e.preventDefault();

    //console.log(this.state.term)
    // when In Class Based Component, need to reference the Props Object with This Keyword before Props
    this.props.onSubmitOnChangeWhateverNameCanChangeOnlyInMyCustomComponentsLikeSearchBar(
      this.state.term
    );
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} // the Value Prop is going to overwrite whatever text is already inside of the Input
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

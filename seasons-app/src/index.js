import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Reason for extending, is that it will allow to get many of built in functionality from this React.Component Class in to App Class
class App extends React.Component {
  // constructor(props) {
  //   super(props); // Reference to parent's constructor function (for all the setup code inside of React.Component Constructor still gets called)

  //   // THIS IS THE ONLY TIME that I do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: "" }; // Initializing State Object
  // }

  // Better way of initializing State
  state = { lat: null, errorMessage: "" };

  /*   // Called automaticaly any time the component shows up on the screen
  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  // Called after geolocation req succeeded or denied
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  } */

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Success Callback
      // 1st Arg a Function Callback that gets called any time that this getCurrentPosition() get's the user's location
      (position) => this.setState({ lat: position.coords.latitude }), // passing an Object that has the update to state
      // Failure Callback
      (err) => this.setState({ errorMessage: err.message }) // 2nd Arg, when it will unable the get the physical users current location
    );
  }

  // helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

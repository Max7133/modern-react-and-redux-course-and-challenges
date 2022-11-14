import React from 'react';

// Component that checks the IMG how large it is, and sets the grid-row-end: INDIVIDUALLY
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // Calling React.createRef() and assign it to the Instance Variable so that I can refer back to later on inside this Class
    this.imageRef = React.createRef(); // for accessing a single element in the DOM, in this case an IMG
  }

  // this will be called after the ImageCard and it's image gets rendered
  componentDidMount() {
    // Gives a direct reference to the img Tag and then Ill add an Event Listener to it. (like in JS)
    // Any time that a image successfully loads up or downloads an Image from the Internet and displays it on the screen, it emits this (load) Event
    // Once it emits this load event, that means now it has successfully downloaded the Image, its being displayed on the screen, and now I can get the height of the Image
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // calling setSpans here is because the Property that I'm gone set inside it is called the (grid-row-end Property) and it took units of spans.
  // Arrow function because of the This Keyword
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    //Gets the Number of spans that the Image requires
    // height / grip-auto-rows height with 10px
    const spans = Math.ceil(height / 10 + 1); // + 1 for if there will be a portion of a row that the Image needs, it's going to be rounded up or go to the next highest row.

    //this.setState({ spans: spans });
    this.setState({ spans: spans });
  };

  render() {
    // destructuring, so I wont write this.props.image.description, this.props.image.urls.regular
    const { description, urls } = this.props.image;

    // ref is a JS Object that has a 'current' Property and it references a DOM NODE in this case is a img
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

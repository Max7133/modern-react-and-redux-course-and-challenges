import "./ImageList.css";
import React from "react";

const ImageList = (props) => {
  // will be called with each image from list of images
  // destructuring of 'image' so I wont need to write it 3 times in the 'return'
  const images = props.images.map(({ description, id, urls }) => {
    // returns a Img Tag that has the appropriate source.
    return (
      //<img alt={image.description} key={image.id} src={image.urls.regular} />
      <img alt={description} key={id} src={urls.regular} />
    ); // adding a Key Property to the root Tag that I'm returning from the map()
  });

  // Taking the 'images' Array that gets returned from the Map statement and return it from the ImageList
  return <div className="image-list">{images}</div>;
};

export default ImageList;

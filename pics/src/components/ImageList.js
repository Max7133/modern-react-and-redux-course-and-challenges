import React from "react";

const ImageList = (props) => {
  // will be called with each image from list of images
  const images = props.images.map((image) => {
    // returns a Img Tag that has the appropriate source.
    return <img src={image.urls.regular} />;
  });

  // Taking the 'images' Array that gets returned from the Map statement and return it from the ImageList
  return <div>{images}</div>;
};

export default ImageList;

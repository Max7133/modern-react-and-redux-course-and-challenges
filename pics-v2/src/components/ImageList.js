import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ img }) {
  const renderedImages = img.map(image => {
    return <ImageShow key={image.id} img={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

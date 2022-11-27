import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

//
const svgMap = {
  // key: value
  //bird: bird, same as bird,
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

// type is bird, cat etc, it gonna take that String while checking svgMap and it will try to find matching Key value pair with a value of one of the SVG's
function AnimalShow({ type }) {
  // state is going to track the Number of time s that the user had clicked on the animal
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;

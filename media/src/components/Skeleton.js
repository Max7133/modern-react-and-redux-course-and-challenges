// This is some sort of loading spinner
import classNames from 'classnames';

// times - a number (how many gray boxes I want to show on the screen)
function Skeleton({ times }) {
  // Array(times).fill(0) - creates a New Array with a length or a number with items in it equal to that 'times' Variable (Prop)
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} />;
    });

  return boxes;
}

export default Skeleton;

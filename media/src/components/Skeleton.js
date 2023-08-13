// This is some sort of loading spinner
import classNames from 'classnames';

// times - a number (how many gray boxes I want to show on the screen)
function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    'relative', // will position the INNER Element 'absolutely'
    'overflow-hidden', // hide the INNER Element if it's not overlapping 'bg-gray-200'
    'bg-gray-200', // background
    'rounded', // background rounded corners
    'mb-2.5', // little bit of margin on the bottom
    className // for allowing me to set the Height and Width of these boxes
  );
  const innerClassNames = classNames(
    'animate-shimmer', // what applies that box animation I did
    'absolute', // position it absolutely
    'inset-0', // makes it expand to fill the OUTER DIV
    '-translate-x-full', // will get the INNER DIV to move off to the far left hand side of the OUTER DIV ('-' - negative position)
    'bg-gradient-to-r', // sets up the gradient that's going to change colors in the X direction towards the right hand side
    'from-gray-200', // starts the gradient with a gray of 200
    'via-white', // transition the gradient to a white color
    'to-gray-200' // go back to 'to-gray-200' on the far right hand side
  );

  // Array(times).fill(0) - creates a New Array with a length or a number with items in it equal to that 'times' Variable (Prop)
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        // outer 'black' div, stays steady
        <div key={i} className={outerClassNames}>
          {/* inner 'gradient div, moves around */}
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;

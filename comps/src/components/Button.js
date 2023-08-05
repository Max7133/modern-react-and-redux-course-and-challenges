import className from 'classnames';
import { twMerge } from 'tailwind-merge';

/* // In JS, Keys cannot have dashes or special symbols inside of them unless wrapped the Key with a quotes like 'bg-blue-500'
// 'px-1.5' will always be included, because I passed it as the 1st Argument
const finalClassName = className('px-1.5', {
  'bg-blue-500': true,
  'text-yellow-500': false,
}); // The Key is going to be included ONLY if tha Value is Truthy

console.log(finalClassName); // px-1.5 bg-blue-500 */

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest // will take all the remaining Properties that are being passed down from the Parent Component and assign them to 'rest'
}) {
  // 'px-3 py-1.5 border' (1st Argument) - will be included no matter what
  const classes = twMerge(
    className(
      rest.className, // receives whatever the className Property coming in off thet 'rest' Object, and use it as a part of the overall Class declaration
      'flex items-center px-3 py-1.5 border',
      {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded, // rounded button - true (will be rounded if true)
        'bg-white': outline, // if 'outline' is true, backround will be 'white' + text color is the same as outline
        'text-blue-500': outline && primary, // the later declaration will overwrite the previos one
        'text-gray-900': outline && secondary, // if outline && secondary is true
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
      }
    )
  );

  // Underlying/Wrapped Element -> <button>Button</button>
  // {...rest} take all the individual Properties and Values out of this Object and assign all of them as Props to the "button" Element
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Assigning an Object in which it's Keys are going to be the Names of Different Props (for Validation)
Button.propTypes = {
  // only 1 of these props should be TRUE !
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // Number(true) === 1; Number(!!undefined) === 0; !!undefined === false; Number(false) === 0;
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;

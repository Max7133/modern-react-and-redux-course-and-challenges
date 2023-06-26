import className from 'classnames';

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
}) {
  // Underlying/Wrapped Element -> <button>Button</button>
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
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

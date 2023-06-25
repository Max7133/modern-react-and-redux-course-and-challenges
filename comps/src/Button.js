import PropTypes from 'prop-types';

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
  return <button>{children}</button>;
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

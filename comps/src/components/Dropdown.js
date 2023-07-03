import { useState } from 'react';

// options Prop - Array of different 'options' Objects (each will have 'label' & 'value')
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // whenever a user click on the selection div, handleOptionClick will close that div with the selection chosen by the user
  const handleOptionClick = option => {
    setIsOpen(false);
    // Selects the option that was clicked
    onChange(option);
  };

  // creatates a list of Elements
  // takes each individual option, and returns a div that has the 'options' label and value as 'key'
  const renderedOptions = options.map(option => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  /*   // by default show select
  let content = 'Select...';
  // if passed down selection, then update it to the label
  if (selection) {
    content = selection.label;
  } */

  return (
    <div>
      {/* if 'selection' is Null then it's going to mean that it's Undefined which is Falsy, therefore it's going to show 'Select...' which is Truthy */}
      <div onClick={handleClick}>{value?.label || 'Select...'}</div>
      {/* if isOpen is true, it going to get back the <div>{renderedOptions}</div>, if false, nothing will be displayed */}
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;

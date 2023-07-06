import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
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
    <div className="w-48 relative">
      {/* if 'selection' is Null then it's going to mean that it's Undefined which is Falsy, therefore it's going to show 'Select...' which is Truthy */}
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {/* if isOpen is true, it going to get back the <div>{renderedOptions}</div>, if false, nothing will be displayed */}
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

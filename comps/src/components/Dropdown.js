import { useState } from 'react';

// options Prop - Array of different 'options' Objects (each will have 'label' & 'value')
function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // creatates a list of Elements
  // takes each individual option, and returns a div that has the 'options' label and value as 'key'
  const renderedOptions = options.map(option => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {/* if isOpen is true, it going to get back the <div>{renderedOptions}</div>, if false, nothing will be displayed */}
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;

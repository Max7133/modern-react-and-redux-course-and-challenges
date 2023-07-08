import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

// options Prop - Array of different 'options' Objects (each will have 'label' & 'value')
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  // it has a reference to some 'div' Element
  const divEl = useRef();

  // is going to be called whenever the Component is first rendered, because of the 2nd Argument []
  useEffect(() => {
    const handler = event => {
      // if for some reason I did not assign that Reference to any Element
      // if I don't have a Reference to any 'div' right now, then just Return early from the Handler
      if (!divEl.current) {
        return;
      }

      // if the NOT 'root' Element of the Dropdown contains whatever Element the User just clicked on
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // 'true' needed for Capture Phase, so that React will be in time to update the closing Dropdown
    document.addEventListener('click', handler, true);

    // Cleanup, it will stop watching for CLICKS after the Dropdown Component is about to be removed from the screen
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    // to make sure I'm going to get a Reference to the bottom 'div', I add REF PROP
    // I pass in 'divEl' there from useRef(), React is going to take that reference, and it's going to give the pointer by allowing to refer to the actual HTML Element that's created in the Browser by that JSX tag.
    <div ref={divEl} className="w-48 relative">
      {/* if 'selection' is Null then it's going to mean that it's Undefined which is Falsy, therefore it's going to show 'Select...' which is Truthy */}
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {/* if isOpen is true, it going to get back the <div>{renderedOptions}</div>, if false, nothing will be displayed */}
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

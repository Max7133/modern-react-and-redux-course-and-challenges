import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1); // the item at index 0 will be expanded by default, when the Component is first rendered

  // tabs will be closed by default with the value of -1
  const handleClick = nextIndex => {
    // fix if programatically set 2 clicks, React won't be able to update the State in time
    // currentExpandedIndex - most up to date version of 'expandedIndex'
    setExpandedIndex(currentExpandedIndex => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // if 'isExpanded' is truthy, then I will get back the last truthy value back, which will be the <div></div>
    // if 'isExpanded' is false, then I will get back the first falsey value, which is going to be 'isExpanded', it's going to be false (and not rendered to the screen)

    // it will show different text, depending upon the Value is expanded
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        {/* whenever the user clicks on one of the 'indexes', the Arrow Function will run and will invoke setExpanded with that particular item (only one Element will be expanded at a time*/}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

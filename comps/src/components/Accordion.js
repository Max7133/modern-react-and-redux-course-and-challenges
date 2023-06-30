import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0); // the item at index 0 will be expanded by default, when the Component is first rendered

  const handleClick = nextIndex => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // if 'isExpanded' is truthy, then I will get back the last truthy value back, which will be the <div></div>
    // if 'isExpanded' is false, then I will get back the first falsey value, which is going to be 'isExpanded', it's going to be false (and not rendered to the screen)

    // it will show different text, depending upon the Value is expanded
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        {/* whenever the user clicks on one of the 'indexes', the Arrow Function will run and will invoke setExpanded with that particular item (only one Element will be expanded at a time*/}
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;

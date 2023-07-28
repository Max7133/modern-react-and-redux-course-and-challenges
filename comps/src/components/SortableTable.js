import { useState } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null); // unsorted (row)
  const [sortBy, setSortBy] = useState(null); // unsorted (column)
  const { config, data } = props; // 'config' Array of Objects

  // is going to be called with a label of the 'column' that the user just clicked on
  const handleClick = label => {
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // 'column' is going to be one of the 'config' Objects from TablePage
  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }

    // it does have a 'sortValue' Prop, then I return a brand new Object that has all the same Props, Keys and Values as this 'column' Object, but it's also going to have a Header Function
    return {
      ...column,
      header: () => (
        // whenever this Arrow Func gets called, I'm going to invoke handleClick, and passing in the Label of the 'column' that was just clicked on.
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data; // by default
  // if not null
  if (sortOrder && sortBy) {
    // for every 'column' Object find a 'column' Obj with a 'label' === sortBy piece of state
    const { sortValue } = config.find(column => column.label === sortBy);
    // once it finds sortValue func from 'config' Obj, then do the sorting
    // [...data] is going to make a New Array of 'data' and copy all the Elements from original 'data' into to it
    // sortedData - is the sorted version of the 'data' Array
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a); // 'a' - is one of the 'data' Objects (fruit Objects)
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  // ...props - already has that 'config' property, but because I'm listing out the 'config' Prop later on inside this Element, the 'config' Prop that is present inside of Props will be overwritten.
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  // means not sorting by this 'column'
  if (label !== sortBy) {
    // show both icons
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  // show both icons (because no sorting)
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    // show up icon
    return (
      <div>
        <GoArrowUp />
      </div>
    );
    // show down icon
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;

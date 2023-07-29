import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null); // unsorted (row)
  const [sortBy, setSortBy] = useState(null); // unsorted (column)

  // is going to be called with a label of the 'column' that the user just clicked on
  const setSortColumn = label => {
    // if user is sorting by 1 'column' and 'label is NOT === to sortBy
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label); // will set to then new 'label' the use just clicked on
      return; // return early so it won't go through other checks bellow
    }

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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;

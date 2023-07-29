import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props; // 'config' Array of Objects
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

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
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // ...props - already has that 'config' property, but because I'm listing out the 'config' Prop later on inside this Element, the 'config' Prop that is present inside of Props will be overwritten.
  return <Table {...props} data={sortedData} config={updatedConfig} />;
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

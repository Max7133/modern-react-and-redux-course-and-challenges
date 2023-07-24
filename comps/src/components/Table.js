import { Fragment } from 'react';
// Fragment - is like a very simple, custom component for, assigning things like a Key Prop, Group, Different Child Elements together, without having to make my own Custom Component

function Table({ data, config, keyFunc }) {
  // maping ovver the 'config' array of Objects and then receives each of those Object as a variable called 'column'
  const renderedHeaders = config.map(column => {
    // if 'column' has a defined 'header' Property, it's going to call the header(), and get back the <th></th>, and going to use that <th</th> to represent the RED header for this 'column'
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  // Mapping over every Object inside of the 'data' Array, so I'm getting those 'rowData' Objects
  const renderedRows = data.map(rowData => {
    // 'column' Object is going to be each of the 'config' Objects that are put together inside the 'config' Array
    const renderedCells = config.map(column => {
      // It's going to have a list of <td></td> Elements exactly === to the number of 'config' Objects inside of the Array
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    // rowData - current row data Object that I'm mapping over */}
    return (
      <tr className="border-b" key={keyFunc(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

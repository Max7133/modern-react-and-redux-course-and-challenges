function Table({ data, config, keyFunc }) {
  const renderedHeaders = config.map(column => {
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

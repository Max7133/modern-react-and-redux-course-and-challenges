import Table from './Table';

function SortableTable(props) {
  const { config } = props; // config Array of Objects

  // is going to be called with a label of the 'column' that the user just clicked on
  const handleClick = label => {
    console.log(label);
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
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });
  // ...props - already has that 'config' property, but because I'm listing out the 'config' Prop later on inside this Element, the 'config' Prop that is present inside of Props will be overwritten.
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;

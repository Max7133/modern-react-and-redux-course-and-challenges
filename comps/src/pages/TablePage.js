import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config = [
    {
      label: 'Name',
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name,
    },
    {
      label: 'Color',
      render: fruit => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: 'Score',
      render: fruit => fruit.score,
      sortValue: fruit => fruit.score,
    },
  ];

  // keyFunc - generates a key to use for each individual row inside the Table
  const keyFunc = fruit => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFunc={keyFunc} />
    </div>
  );
}

export default TablePage;

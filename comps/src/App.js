import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  // this is going to be called with newly selected 'option' - option Object
  const handleSelect = option => {
    setSelection(option); // updating the selection State
  };

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;

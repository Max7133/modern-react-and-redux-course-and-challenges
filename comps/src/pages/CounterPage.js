import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = e => {
    // || 0 - if I get back NaN, that is a falsy value, and so instead of a NaN, it will assign 0 to the value variable
    const value = parseInt(e.target.value) || 0; // parseInt - it will show as number
    setValueToAdd(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // taking the valueToAdd piece of State, and update the 'count' piece of State with it
    setCount(count + valueToAdd);
    // and then reset valueToAdd to 0
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          // || "" - so that the input won't always show 0 by default
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

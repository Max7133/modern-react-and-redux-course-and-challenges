import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const CHANGE_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  //// IF STATEMENT VERSION
  /*   // Whatever gets returned will be the new State!
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === CHANGE_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  // at the end - ALWAYS RETURN STATE
  return state; // returnes current state (because if I return nothing, there won't be 'undefined') */

  // SWITCH STATEMENT VERSION
  // Whatever gets returned will be the new State!
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      // 1st option
      // throw new Error('unexpected action type: ' + action.type);
      // 2nd option
      return state; // returnes whatever the current 'state' and ignores whatever 'action' Object was just dispatched
  }
};

function CounterPage({ initialCount }) {
  // useState version
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // useReducer version
  // 1st Arg reducer, 2nd Arg - an Object with a count of initialCount and valueToAdd of 0
  // to change State, I need to call 'dispatch'
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  //// STATE UPDATES WITH useReducer
  // 1. when I call dispatch() (line 27) React is going to find the reducer as the 1st Arg in useReducer() (line 17)
  // 2. it's gonna call the reducer func (line 5) and will put my current 'state' as the 1st Arg in const reducer
  // 3. and 2nd Arg 'action' there is going to be anything that I provided to the dispatch() in this case, which I didn't provide anytning, so 'action' will be undefined, so I don't need to use 'action' in any way just yet
  const increment = () => {
    //setCount(count + 1); - this is from useState()
    // when I call dispatch() I'm going to dispatch an 'action' Object that must have a Type Property
    dispatch({
      // All 'actions' must have a Type Property
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    //setCount(count - 1); - this is from useState()
    dispatch({
      // All 'actions' must have a Type Property
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = e => {
    // || 0 - if I get back NaN, that is a falsy value, and so instead of a NaN, it will assign 0 to the value variable
    const value = parseInt(e.target.value) || 0; // parseInt - it will show as number
    //setValueToAdd(value); - this is from useState()

    // whenever user types, I need to change my State
    dispatch({
      // All 'actions' must have a Type Property
      type: CHANGE_VALUE_TO_ADD, // can be any string
      payload: value, // for communicating some info, I'm telling the Reducer exactly what I want to Set Value to add to
      // so because I need to provide some info along with this one, I will add this to the Optional PAYLOAD Property
      // in this case it's 'value' - that's what I want to Set a Value to add to
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // taking the valueToAdd piece of State, and update the 'count' piece of State with it
    //setCount(count + valueToAdd); - this is from useState()
    // and then reset valueToAdd to 0
    //setValueToAdd(0); - this is from useState()
    dispatch({
      // All 'actions' must have a Type Property
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          // || "" - so that the input won't always show 0 by default
          value={state.valueToAdd || ''}
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

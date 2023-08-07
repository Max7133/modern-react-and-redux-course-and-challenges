import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  // useSelector - hook for accessing the State
  // passing over a Selector Function that receives the Big State Object
  // and whatever I return from the Selector Function is what I'm going to get access to inside of my Component
  //const name = useSelector(state => {
  const { name, cost } = useSelector(state => {
    //return state.form.name; // for now, just I get access for the name piece of state
    return {
      name: state.form.name,
      cost: state.form.cost, // now I need to return the 'cost' as well
    };
  });

  const handleNameChange = event => {
    // every reducer func expects to receive a Payload
    dispatch(changeName(event.target.value)); // 'event.target.value' is going to be the Payload in formSlice
  };

  const handleCostChange = event => {
    const carCost = parseInt(event.target.value) || 0; // cost is always a number and NOT a NaN
    dispatch(changeCost(carCost));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            {/* name - name piece of State from Redux Store */}
            {/* whatever the user types inside of here, that's going to cause this onChange Prop,
             or whatever Event Handler I pass to it to be called, 
             and inside there I want to dispatch an 'action' telling the Redux Store that it needs to update the 'name' piece of state */}
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''} // for not showing 0 when empty
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

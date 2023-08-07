import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  // useSelector - hook for accessing the State
  // passing over a Selector Function that receives the Big State Object
  // and whatever I return from the Selector Function is what I'm going to get access to inside of my Component
  const name = useSelector(state => {
    return state.form.name; // for now, just I get access for the name piece of state
  });
  const handleNameChange = event => {
    // every reducer func expects to receive a Payload
    dispatch(changeName(event.target.value)); // 'event.target.value' is going to be the Payload in formSlice
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
        </div>
      </form>
    </div>
  );
}

export default CarForm;

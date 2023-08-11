import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  // Access to the Dispatch Function
  const dispatch = useDispatch();
  // getting access to the list of cars from Redux Store and print them out
  const cars = useSelector(state => {
    return state.cars.carsData;
  });

  // updating the State means dispatch the Action Object
  const handleCarDelete = car => {
    dispatch(removeCar(car.id)); // this Action Creator needs to have a Payload of 'id'
  };

  // for every car, return a div element
  const renderedCars = cars.map(car => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)} // the 'car' I'm iterating over
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;

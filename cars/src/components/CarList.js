import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  // Access to the Dispatch Function
  const dispatch = useDispatch();

  //const cars = useSelector(state => {
  // getting access to the list of cars from Redux Store and print them out
  // in addition, Derived State (state that can be calculated from using the existing state) is best to put logic in useSelector()
  // using destructuring so I can use only the State that I care about
  // FILTERED LIST
  const cars = useSelector(({ cars: { carsData, searchTerm } }) => {
    //return state.cars.carsData;
    // return 'true' for keeping the car and return it inside the new Array
    // if the 'car' has a 'name', that includes the searchTerm,
    return carsData.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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

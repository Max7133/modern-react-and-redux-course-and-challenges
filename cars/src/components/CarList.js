import { useSelector } from 'react-redux';

function CarList() {
  // getting access to the list of cars from Redux Store and print them out
  const cars = useSelector(state => {
    return state.cars.carsData;
  });

  const handleCarDelete = car => {};

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

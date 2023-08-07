import { useSelector } from 'react-redux';

function CarList() {
  // getting access to the list of cars from Redux Store and print them out
  const cars = useSelector(state => {
    return state.cars.carsData;
  });

  console.log(cars);

  return <div>CarList</div>;
}

export default CarList;

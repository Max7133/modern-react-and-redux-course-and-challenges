import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { carsData, searchTerm } }) =>
    carsData
      .filter(car =>
        // for every 'car' I want t return 'true' if its lowerCase name includes the lowerCase of searchTerm
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      // then out of the filtered list of 'cars', I want to take all these different 'cars' costs and sum them all up into 1 single number
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;

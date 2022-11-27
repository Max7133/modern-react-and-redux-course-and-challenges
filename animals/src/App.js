import { useState } from 'react';
import AnimalShow from './AnimalShow';

// Function that returns a random String
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // default starting Value is an Array
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // modifies a piece of state!!!
    //animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Returns a random animal in a new Array
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;

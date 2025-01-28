import './App.css';

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];

  // Sum
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // Average
  const average = sum / numbers.length;

  // Maximum
  const maxNumber = numbers.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
  }, numbers[0]);

  // Minimum
  const minNumber = numbers.reduce((min, currentValue) => {
    return currentValue < min ? currentValue : min;
  }, numbers[0]);

  return (
    <div>
      <h2>Array Operations</h2>
      <p>Sum: {sum}</p>
      <p>Average: {average}</p>
      <p>Maximum: {maxNumber}</p>
      <p>Minimum: {minNumber}</p>
    </div>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };

  
  const updatedPerson = { ...person, age: 29 };

  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {updatedPerson.name}</p>
      <p>Age:{updatedPerson.age}</p>
      <p>City:{updatedPerson.city}</p>
    </div>
  );
};

const SquareArea = () => {
  const sideLength = 5;
  const area = sideLength * sideLength;
  return(
    <div>
      <h1>Area of Square</h1>
      <p>The Area of the square is {area}</p>
    </div>
  )
}


const CapitalString = () => {
  const str = "hello world";
  const capitalize =  str.toUpperCase() ;
  return(
    <div>
      <h1>Capitalize Text</h1>
      <p>{capitalize}</p>
    </div>
  )
}

const AreaOfCircle = () => {
  const radius = 8;
  const areaCircle = 3.142 * radius * radius;
  return(
    <div>
      <h1>Area of Circle</h1>
      <p>The area of the circle is {areaCircle}</p>
    </div>
  )
}


export default function App() {
  return (
    <main>
      <ArrayOperations />
     <ObjectManipulation />
      <SquareArea />
      <CapitalString />
      <AreaOfCircle />
    </main>
  );
}

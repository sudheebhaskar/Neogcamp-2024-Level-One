import './App.css'

const RandomNumber = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const randomNumber = generateRandomNumber();

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
    </div>
  );
};

const number = -10; 
const AbsoluteValue = ({ number }) => {
  const absoluteValue = Math.abs(number);
 

  return (
    <div>
      <h1>Original Number: {number}</h1>
      <h2>Absolute Value: {absoluteValue}</h2>
    </div>
  );
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
const SumOfEvenNumbers = ({ numbers }) => {
  const sumOfEvenNumbers = numbers
    .filter(number => number % 2 === 0)
    .reduce((acc, number) => acc + number, 0);

  return (
    <div>
      <h1>Sum of Even Numbers: {sumOfEvenNumbers}</h1>
    </div>
  );
};

const sideLength = 5;
const SquarePerimeter = ({ sideLength }) => {
  const perimeter = 4 * sideLength;
  return (
      <div>
        <h1>Square Details</h1>
        <p><strong>Side Length:</strong> {sideLength} cm</p>
        <p><strong>Perimeter:</strong> {perimeter} cm</p>
      </div>
    );
  };


export default function App() {
  return (
    <main>
      <RandomNumber />
       <AbsoluteValue number={number} />
      <SumOfEvenNumbers numbers={numbers} />
      <SquarePerimeter sideLength={sideLength} />
    </main>
  )
}

//Arrow function that generates randon numbers between 1 to 10
const getRandomNumber = () => Math.random() * 10;
console.log(getRandomNumber());

//arrow function that returns current date
const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

//arrow function that returns greeting
const greetMessage = () => "Hello, Welcome to neogCamp!";
console.log(greetMessage());

//arrow function with one parameter
// arrow function to get the square of num

const getSquareValue = (num) => num ** 2;
console.log(getSquareValue(8));

//arrow function to check whether the number is +ve
const isPositive = num => num > 0
console.log(isPositive(6));
console.log(isPositive(-4));

//arrow function to check whether number is even

const isEven = (num) => num % 2 === 0
console.log(isEven(12));
console.log(isEven(17));
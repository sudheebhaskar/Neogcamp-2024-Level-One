//Reduce method

//sum of numbers in an array
const numbers = [1, 2, 3, 4];
let sum = 0;
for(let i=0; i < numbers.length; i++){
  sum = sum + numbers[i]
}
console.log(sum);

//using reduce method
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers);


//concatenate into a single string
const stringsArray = ["Hello", " World", "!"];
const combinedString = stringsArray.reduce((accumulator, currentValue) => accumulator + currentValue, "");

console.log(combinedString);


//Find the maximum number in an array
const numbersArray = [10, 15, 8, 20, 15];

const maxNumber = numbersArray.reduce((acc, curr) => (curr > acc ? curr: acc), numbersArray[0]);
console.log(maxNumber);


//Occurrence of each word in an array

const fruits = ["apple", "banana", "apple", "orange", "kiwi", "kiwi"];
//Required output: {apple: 2, banana: 1, orange: 1, kiwi: 2 }

const wordCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
return accumulator
}, {})
console.log(wordCount);
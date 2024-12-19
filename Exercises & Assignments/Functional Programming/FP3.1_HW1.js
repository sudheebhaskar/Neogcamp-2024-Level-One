//Program 1
console.log("Problem 1");

const words = ["apple", "banana", "kiwi", "orange", "grape"];
const longestWord = words.reduce((accumulator, currentValue) => currentValue.length > accumulator.length ? currentValue: accumulator, words[0])
console.log(longestWord);


//Program 2
console.log("\n" + "Problem 2");

const numbers = [10, 5, 8, 20, 15];
const smallestNumber = numbers.reduce((accumulator, currentValue) =>
      accumulator < currentValue ? accumulator : currentValue, numbers[0])
console.log(smallestNumber);


//Program 3
console.log("\n" + "Problem 3");

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

const totalLength = wordsLength.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);
console.log(totalLength);


//Program 4
console.log("\n" + "Problem 4");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

const evenCount = nums.reduce((accu, curr ) => {
  return curr % 2 === 0 ? accu + 1 : accu;
}, 0);
console.log(evenCount); 


//Program 5
console.log("\n" + "Problem 5");

const wordsCaps = ["hello", "world", "how", "are", "you"];

const capitalizedString = wordsCaps.reduce((accumulator, currentValue) => {
  const capitalizedWord = currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
  return accumulator + (accumulator ? ' ' : '') + capitalizedWord;
}, '');

console.log(capitalizedString);


//Program 6
console.log("\n" + "Problem 6");

const numsAvg = [10, 15, 20, 25, 30];

const sum = numsAvg.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numsAvg.length;

console.log(average);


//Program 7
console.log("\n" + "Problem 7");

const nummbers = [1, 2, 3, 4, 5];
const sumOfSquares = nummbers.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0);

console.log(sumOfSquares);


//Program 8
console.log("\n" + "Problem 8");

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];

const wordOccurrences = stationeryWords.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(wordOccurrences); 


//Program 9
console.log("\n" + "Problem 9");

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];

const letterOccurrences = wordsLetter.reduce((accumulator, currentValue) => {
  const firstLetter = currentValue.charAt(0);
  if (accumulator[firstLetter]) {
    accumulator[firstLetter] += 1;
  } else {
    accumulator[firstLetter] = 1;
  }
  return accumulator;
}, {});

console.log(letterOccurrences); 


//Program 10 
console.log("\n" + "Problem 10");

const numPositive = [-2, 3, 4, -5, 6];

const productOfPositives = numPositive.reduce((accumulator, currentValue) => {
  return currentValue > 0 ? accumulator * currentValue : accumulator;
}, 1);

console.log(productOfPositives); 







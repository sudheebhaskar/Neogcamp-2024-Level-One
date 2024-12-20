//Program 1
console.log("Problem 1");

const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];
const totalLength = stationeryWords.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);
console.log(totalLength);


//Program 2
console.log("\n" + "Problem 2");

const numbersArray = [1, 2, 3, 4, 5, 6];

const sumOfEvens = numbersArray.reduce((accumulator, currentValue) => {
  return  currentValue % 2 === 0 ?  accumulator +   currentValue: accumulator;
}, 0);

console.log(sumOfEvens); 


//Program 3
console.log("\n" + "Problem 3");

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];

const countOfOdds = numsArr.reduce(( accumulator, currentValue) => {
  return currentValue % 2 !== 0 ? accumulator + 1 : accumulator;
}, 0);

console.log(countOfOdds); 


//Program 4
console.log("\n" + "Problem 4");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const countEvenOdd = nums.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.even += 1;
  } else {
    acc.odd += 1;
  }
  return acc;
}, { even: 0, odd: 0 });

console.log(countEvenOdd); 


//Program 5
console.log("\n" + "Problem 5");

const allNums = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const countPosNeg = allNums.reduce((acc, curr ) => {
  if (curr > 0) {
    acc.pos += 1;
  } else if ( curr < 0) {
    acc.neg += 1;
  }
  return acc;
}, { pos: 0, neg: 0 });

console.log(countPosNeg); 


//Program 6
console.log("\n" + "Problem 6");

const numPositive = [-2, 3, 4, 0, -5, 6];

const productOfNegatives = numPositive.reduce((acc, curr) => {
  if (curr< 0) {
    return acc * curr ;
  } else {
    return acc;
  }
}, 1);

const finalProduct = productOfNegatives === 1 ? 0 : productOfNegatives;

console.log(finalProduct); 


//Program 7
console.log("\n" + "Problem 7");

const wordsCaps = ["reduce", " method", " needs", " a", " lot", " of", " practice"];

const concatenatedString = wordsCaps.reduce((acc, curr) => {
  return  acc +  curr.toUpperCase();
}, '');

console.log(concatenatedString); 


//Program 8
console.log("\n" + "Problem 8");

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const countPosEvenAndOthers = allNumsArr.reduce((acc,  curr) => {
  if (curr > 0 && curr % 2 === 0) {
    acc.posEven += 1;
  } else {
    acc.others += 1;
  }
  return acc;
}, { posEven: 0, others: 0 });

console.log(countPosEvenAndOthers); 


//Program 9
console.log("\n" + "Problem 9");

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];

const sumOfNegativeOdds = numbersArr.reduce((accu, curr) => {
  return (curr < 0 && curr % 2 !== 0) ? accu + curr: accu;
}, 0);

console.log(sumOfNegativeOdds); 


//Program 10
console.log("\n" + "Problem 10");

const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];

const concatenatedWord = letters.reduce((accumulator, currentValue) => {
  return  accumulator + currentValue ;
}, '');

console.log(concatenatedWord); 








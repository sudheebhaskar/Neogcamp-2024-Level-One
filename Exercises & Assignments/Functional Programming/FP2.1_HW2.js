//Program 1
console.log("Problem 1");

const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumber = nums.filter((num) => num % 2 == 0);
console.log(evenNumber);


//Program 2
console.log("\n" + "Problem 2");

const words = ["kiwi", "mango", "apple", "orange", "banana"];
const greaterFive = words.filter((word) => word.length > 5);
console.log(greaterFive);


//Program 3
console.log("\n" + "Problem 3");

const wordss = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const endWithS = wordss.filter((word) => word.startsWith("S"));
console.log(endWithS);


//Program 4
console.log("\n" + "Problem 4");

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMultipleOfThree = threeMultiples.filter((number) => (number % 3) != 0)
console.log(notMultipleOfThree);


//Program 5
console.log("\n" + "Problem 5");

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const divisibleBySevenAndThree = numbs.filter((number) => (number % 7 == 0) || (number % 3 == 0))
console.log(divisibleBySevenAndThree);


//Program 6
console.log("\n" + "Problem 6");

const worrds = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const lowerCaseArray = worrds.filter((word) => word === word.toLowerCase())
console.log(lowerCaseArray);


//Program 7
console.log("\n" + "Problem 7");

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const notIncludesA = wordsY.filter((word) => !(word.includes("a")));
console.log(notIncludesA);


//Program 8
console.log("\n" + "Problem 8");

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipleOfTwoOrThree = numsOnetoTen.filter((number) => (number % 2 == 0) || (number % 3 == 0));
console.log(multipleOfTwoOrThree);


//Program 9
console.log("\n" + "Problem 9");

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const wordWithAOrY = feelingWords.filter((word) =>  (word.includes("a")) || (word.includes("y")));
console.log(wordWithAOrY);


//Program 10
console.log("\n" + "Problem 10");

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const twentyToFourty = newNums.filter((num) => (num > 20) && (num < 40) );
console.log(twentyToFourty);
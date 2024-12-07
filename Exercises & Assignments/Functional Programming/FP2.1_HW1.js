//Program 1
console.log("Problem 1");

const nums = [12, 5, 20, 8, 15, 30];
const numberGreaterThanTen = nums.filter(num => num > 10);
console.log(numberGreaterThanTen);


//Program 2
console.log("\n" + "Problem 2");

const words = ["hello", "world", "apple", "orange", "banana"];
const wordsWithLetterO = words.filter(word => word.includes("o"));
console.log(wordsWithLetterO);


//Program 3
console.log("\n" + "Problem 3");

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

   const primeNumbers = numbers.filter((num) => {
     if (num <= 1) return false; 
     if (num <= 3) return true;  

    if (num % 2 === 0 || num % 3 === 0) return false;

     for (let i = 5; i * i <= num; i += 6) {
       if (num % i === 0 || num % (i + 2) === 0) return false;
     }
    return true;
   });
console.log(primeNumbers);


//Program 4
console.log("\n" + "Problem 4");

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const threeNotMultiples = threeMultiples.filter(num => num % 3 != 0);
console.log(threeNotMultiples);


//Program 5
console.log("\n" + "Problem 5");

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notDivisibleByTwoAndThree = numbs.filter(num => (num % 2 != 0) &&(num % 3 !=0))
console.log(notDivisibleByTwoAndThree);  


//Program 6
console.log("\n" + "Problem 6");

const wordds = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];
const uppercaseWords = wordds.filter(str => str === str.toUpperCase());

console.log(uppercaseWords);


//Program 7
console.log("\n" + "Problem 7");

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const stringsNotEndingWithY = wordsY.filter(word => word.slice(-1) !== 'y');

console.log(stringsNotEndingWithY);



//Program 8
console.log("\n" + "Program 8");

const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesTwoAndThree = numms.filter((num) => (num % 2 === 0) || (num % 3 === 0));
console.log(multiplesTwoAndThree);


//Program 9
console.log("\n" + "Problem 9");

const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordWithUAndY = feelingWords.filter((word) => (word.includes('y')) && (word.includes('u')));
console.log(wordWithUAndY);


//Program 10
console.log("\n" + "Problem 10");

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipleOfThreeOrFive = newNums.filter((newNum) => (newNum % 3 === 0) || (newNum % 5 === 0));
console.log(multipleOfThreeOrFive);


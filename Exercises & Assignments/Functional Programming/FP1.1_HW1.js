//Program 1
console.log("Problem 1");

const words = ["apple", "banana", "Kiwi", "Orange", "grape"];
const lengthOfString = words.map((word) =>  word.length );
console.log("Length of each element is: " ,lengthOfString);


//Program 2
console.log("\n" + "Problem 2");

const numbers = [1, 2, 3, 4, 5];
const squaredArray = numbers.map((num) => num * num);
console.log("Squares of each element in the array:", squaredArray)


//Program 3
console.log("\n" + "Problem 3");

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const capitalizedArray = fruits.map((fruit) => fruit.toUpperCase());
console.log("Each element turned to capitals", capitalizedArray);


//Program 4
console.log("\n" + "Problem 4");

const nums = [4, 9, 16, 25, 36];
const squareRootValue = nums.map((number) => Math.sqrt(number));
console.log("Square Roots are: ", squareRootValue);


//Program 5
console.log("\n" + "Problem 5");

const prefixFruits = ["apple", "banana", "Kiwi","Orange", "grape"];
const prefixedArray = prefixFruits.map((fruit) => "fruit-" + fruit);
console.log("Array with a prefixed value", prefixedArray);


//Program 6
console.log("\n"+ "Problem 6");

const numbersArray = [1, 2, 3, 4, 5];
const addTenToEach = numbersArray.map((num) => num + 10);
console.log("Added 10 Array:", addTenToEach);


//Program 7
console.log("\n" + "Problem 7");

const numsArray = [1,2,3,4,5];
const addSquareArray = numsArray.map((digit) => (digit*digit) + digit);
console.log("Square added: ",addSquareArray);


//Program 8
console.log("\n" + "Problem 8");

const numsArr = [-5, 3, -8, 12, -1, 6];
const absoluteArray = numsArr.map((num) =>Math.abs(num));
console.log("Array with absolute values: ", absoluteArray);


//Program 9
console.log("\n" + "Problem 9");

const phrases = ["Hello", "How are you", "Goodbye"];
const  suffixArray = phrases.map((phrase) => phrase + "!")
console.log("The array with suffixed value: ", suffixArray)


//Program 10
console.log("\n" + "Problem 10");

const wordss = ["apple", "banana", "kiwi", "orange", "grape"];

const capitalizeThirdLetters= wordss.map(word =>
  word.length >= 3 ? word.slice(0, 2) + word[2].toUpperCase() + word.slice(3) : word
);

console.log(capitalizeThirdLetters);



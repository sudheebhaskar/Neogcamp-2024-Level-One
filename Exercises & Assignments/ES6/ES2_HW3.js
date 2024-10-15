//Program 1
console.log("Problem 1");
const fullName = (firstName, lastName) => ({firstname: firstName, lastname: lastName})

console.log(fullName("Sudheendra", "Bhaskar"));
console.log("\n");

//Program 2
console.log("Problem 2");
const capitalLength = inputStr => ({length: inputStr.length, upperCase: inputStr.toUpperCase() })

console.log(capitalLength("hello"));
console.log("\n");

//Program 3
console.log("Problem 3");
const profile = (firstName, lastName, age, phoneNum) => ({
  firstname: firstName,
  lastname: lastName,
  age: age,
  ph_num: phoneNum
})

console.log(profile("Sudheendra", "Bhaskar", 30, 7892612054));
console.log("\n");

//Program 4 
console.log("Problem 4");
const concatChar = (firstWord, secondWord) => ({concatenation: (firstWord + " " + secondWord), charCount: (firstWord+secondWord).length})

console.log(concatChar("Hello" ,"World"));
console.log("\n");

//Program 5
console.log("Problem 5");
const circle = radius => ({cicumference: 2 * Math.PI * radius, area: Math.PI * radius * radius})

console.log(circle(5));
console.log("\n");

//Program 6
console.log("Problem 6")
const calculateDifferenceAndQuotient = (x, y) => ({difference: x - y, quotient: x / y})

console.log(calculateDifferenceAndQuotient(10, 2));
console.log("\n");

//Program 7
console.log("Problem 7");
const analyzeSentence = sentenceStr => ({wordCount : sentenceStr.split(' ').length})

console.log(analyzeSentence("JavaScript is fun"));
console.log("\n")

//Program 8
console.log("Problem 8");
const calculateSquareAndCube = num => ({square: num * num, cube: num * num * num})

console.log(calculateSquareAndCube(4));
console.log("\n");

//Program 9
console.log("Problem 9");
const checkNumber = number => ({isPositive: number > 0, isNegative: number < 0})

console.log(checkNumber(-7));
console.log(checkNumber(5));
console.log("\n");
//Default Parameters

//Add two numbers
const addNumbers = (a, b=1) => a + b
console.log(addNumbers(2));

//Multiply two numbers
const multiplyNumbers = (a, b=1) => a * b
console.log(multiplyNumbers(2, 2))

//concatenate two strings
const concatenateStrings = (name, greeting = "Hello ") => greeting + name
console.log(concatenateStrings("Bob"));

//to greet user
const greetUser = (name ="neogrammer", greeting="Hello ") => greeting + name 
console.log(greetUser());

//add three numbers
const addThreeNumbers = (a, b, c = 3) => a + b + c
console.log(addThreeNumbers(1, 2));
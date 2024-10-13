//Arrow function which takes a string and returns an object
const createStringObject = string => ({text:string})
console.log(createStringObject("Hello"));

//create a function which takes  two numbers & return their product as an object
const calculateSumAndProduct = (a, b) => ({sum: a + b, product: a * b})
console.log(calculateSumAndProduct(2, 3));


//arrow function that takes a person's name & age & returns an object
const createPersonObject = (name, age) => ({name: name, age: age})
console.log(createPersonObject("Alex", 28));
//Program 1
console.log("Problem 1");

const concatenateStrings = (...rest) => console.log(rest.join(" "));

concatenateStrings("Hello", "world", "!");
concatenateStrings("JavaScript", "is", "fun", "to", "learn.");


//Program 2
console.log("\n"+"Problem 2");

const mergeArrays = (array1, array2) => [...array1, ...array2];
console.log(mergeArrays([1,2,3],[4,5,6]));


//Program 3
console.log("\n" + "Problem 3");

const concatenateWithSeparator = (a, ...concatenate) => {
  let result = " "
  for(let i=0; i < concatenate.length; i++){
    result = result +  concatenate[i] + a ;
  }
  return result;
}

console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue','yellow'));


//Program 4
console.log("\n" + "Problem 4");

const extractObjectValues = (obj) => {
  const {name, age} = obj;
  console.log(`Name: ${name}, Age: ${age}`)
}

extractObjectValues({name: "Alice", age: 25});
extractObjectValues({name: "Bob", age: 30});


//Program 5
console.log("\n" + "Problem 5");

const extractArrayValues = (arr) => {
  const [a, b, c] = arr;
  console.log(a, b, c);
}

extractArrayValues([1, 2, "Hello", 3]);
extractArrayValues(["apple", "orange", "banana"]);


//Program 6
console.log("\n" + "Problem 6");

const extractNestedValues = (obj) => {
  const {data:{firstName, lastName, age}} = obj;
  console.log(`${firstName} ${lastName} will be ${age+5} years old in five years`);
}

extractNestedValues({data: {firstName: "Priya", lastName: "Gupta", age: 20}});
extractNestedValues({data: {firstName: "John", lastName: "Doe", age: 25}});


//Program 7
console.log("\n" + "Problem 7");

const printInfo = ({name: {firstName: firstname, lastName: lastname}, department}) => {
  console.log(`${firstname} ${lastname} works in ${department} department`);
}

printInfo({name: {firstName: "John", lastName: "Doe"}, department: "IT"});
printInfo({name:{firstName: "Alice", lastName: "Smith"}, department: "Legal"});


//Program 8
console.log("\n" + "Problem 8");

const printUserDetails = ({name: personName = "Anonymous", username: personUsername = "anonymous", post: text = "Hello World!"}) => {
  return `${personUsername} posted "${text}"`;  
}

console.log(printUserDetails({name: "John", username: "john", post: "Hello this is John. I am from England."}));
console.log(printUserDetails({}));


//Program 9
console.log("\n" + "Problem 9");

const checkEvenOdd = (num) => {
    return `${num % 2 == 0 ? "Its an even number" : "Its an odd number"}`
}

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));


//Program 10
console.log("\n" + "Problem 10");

const checkDiscountEligibility = (amount, premium) => {
  return `${((amount > 100) && (premium = true) )? "You are eligible for a 10% discount" : "You are eligible for a 5% discount"}`
}

console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));


//Program 11
console.log("\n" + "Problem 1");

const result = (object1, object2) => ({...object1, ...object2})

console.log(result({name: "Alice", age: 30}, {city: 'London', country: 'UK'}));


//Program 12
console.log("\n" + "Problem 12");

const obj = {name: 'Dave', age: 25};
const addKeyValuePair = (obj, key, value) => ({...obj, [key]: value})

console.log(addKeyValuePair(obj, 'city', 'New York'));


//Program 1
console.log("Problem 1");

// let personName = 'Alice'
// let age = 25

const createPerson = (personName, age) => {
  return {personName, age}
}

console.log(createPerson("Alice", 25)); 
console.log(createPerson("Bob", 30))


//Program 2
console.log("\n" + "Problem 2");

const createFruit = (name = "Apple", color = "Red") => {
  return {name, color};
}

console.log(createFruit());
console.log(createFruit("Banana", "Yellow"));


//Program 3
console.log("\n" + "Problem 3");

const createBookObj = (title, author, genre) => {
  return {title, author, genre}
}

console.log(createBookObj("The Great Gatsby", "F.Scott Fitzgerald", "Classic"));
console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"));


//Program 4
console.log("\n" + "Problem 4");

const createBook = (bookName = "The Hitchhiker's Guide to the Galaxy", author = "Douglas Adams") => {
  return {bookName, author};
}

console.log(createBook());
console.log(createBook("A Suitable Boy","Vikram Seth"));


//Program 5
console.log("\n" + "Problem 5");

let aaloo = 1;
let bhaaloo = 2;

const createObject = (aaloo, bhaaloo) => {
  return {aaloo, bhaaloo}
}

console.log(createObject(aaloo, bhaaloo));


//Program 6
console.log("\n" + "Problem 6");

const calculateArea = (length, width) => {
  return {length, width, area: length*width}
}

console.log(calculateArea(5, 8));


//Program 7
console.log("\n" + "Problem 7");

const printObjOfArrays = ([...a],[...b]) => {
  return {arr1:[a], arr2:[b]}
}

console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));


//Program 8
console.log("\n" + "Problem 8");

const createTriangle = (side1, side2, side3) => {
  return {side1, side2, side3, Perimeter: side1+side2+side3 }
}

console.log(createTriangle(3, 4, 5));


//Program 9
console.log("\n" + "Program 9");

const createPoint = (a, b) => {
  return {x: a, y: b}
}

console.log(createPoint(3, 7));


//Program 10
console.log("\n" + "Program 10");

const createEmail = (username, domain) => {
  return {username: username, domain: domain, fullAddress: username+"@"+domain}
}

console.log(createEmail("john.doe", "example.com"));
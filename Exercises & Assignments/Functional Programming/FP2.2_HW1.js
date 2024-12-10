//Program 1
console.log("Problem 1");

const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 65 },
  { name: "Charlie", grade: 90 },
];

const lowerThan = students.filter((student) => !(student.grade < 70));
console.log(lowerThan);


//Program 2
console.log("\n" + "Problem 2");

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Tablet", price: 500 },
];
const expensive = products.filter((product) => product.price < 1000);
console.log(expensive);


//Program 3
console.log("\n" + "Problem 3");

const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 45000 },
  { name: "Charlie", salary: 70000 },
];
const employeeWithHighSalary = employees.filter((employee) => employee.salary > 50000 );
console.log(employeeWithHighSalary);


//Program 4
console.log("\n" + "Problem 4");

const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Interstellar", rating: 8.6 },
  { title: "The Dark Knight", rating: 9.0 },
];

const lowerRatedMovies = movies.filter((movie) => movie.rating < 7.0);
console.log(movies);


//Program 5
console.log("\n" + "Problem 5");

const cars = [
  { brand: "Toyota", year: 2018 },
  { brand: "Honda", year: 2019 },
  { brand: "Ford", year: 2010 },
];
const olderCars = cars.filter((car) => ( 2024 - (car.year)) <= 5);
console.log(olderCars);


//Program 6
console.log("\n" + "Problem 6");

const studdents = [
{ name: "Alice", gpa: 3.8 },
{ name: "Bob", gpa: 3.2 },
{ name: "Charlie", gpa: 3.9 },
];

const higherGradeStudents = studdents.filter((studdent) => studdent.gpa > 3.5 );
console.log(higherGradeStudents);


//Program 7
console.log("\n" + "Problem 7");

const fruits = [
  { name: "Apple", pricePerPound: 1.5 },
  { name: "Banana", pricePerPound: 2.2 },
  { name: "Orange", pricePerPound: 1.8 },
];

const affordableFruits = fruits.filter((fruit) => fruit.pricePerPound < 2.0);
console.log(affordableFruits);


//Program 8
console.log("\n" + "Problem 8");

const employeess = [
  { name: "Alice", employed: true },
  { name: "Bob", employed: false },
  { name: "Charlie", employed: true },
];

const employedEmployeess = employeess.filter((employees) => employees.employed === true);
console.log(employedEmployeess);


//Program 9
console.log("\n" + "Problem 9");

const prooducts = [
  { name: "Laptop", inStock: true },
  { name: "Smartphone", inStock: false },
  { name: "Tablet", inStock: true },
];
const prooductsInStock = prooducts.filter((prooduct) => prooduct.inStock === true);
console.log(prooductsInStock);


//Program 10
console.log("\n" + "Program 10");

const laptops = [
  { brand: "Dell", screenSize: 14 },
  { brand: "HP", screenSize: 15.6 },
  { brand: "Lenovo", screenSize: 13 },
  { brand: "Acer", screenSize: 17 },
];

const laptopBig = laptops.filter((laptop) => laptop.screenSize > 15.0);
console.log(laptopBig);
//Program 1
console.log("Problem 1");

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

const bookTitles = books.map((book) => book.title);
console.log("Book Titles are: ", bookTitles)


//Program 2
console.log("\n" + "Problem 2");

const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "kiwi", color: "brown" },
];

const upperCaseFruits = fruits.map(fruit => ({ ...fruit, 
  name: fruit.name.toUpperCase() 
}));

console.log(upperCaseFruits);


//Program 3
console.log("\n" + "Problem 3");

const employees = [
{ name: "Alice", salary: 50000 },
{ name: "Bob", salary: 60000 },
{ name: "Charlie", salary: 70000 }
];

const newSalary = employees.map((employee) => ({...employee, salary: (10/100 * employee.salary) + employee.salary}))
console.log(newSalary);

//Program 4  
console.log("\n" + "Problem 4");

const products = [

  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Headphones", price: 100 }
]; 

const discountedPriceArray = products.map((item) => (
  {...item, 
   price: (item.price - (20/100 * item.price))
  }));
console.log("Products with discounted price", discountedPriceArray)


//Program 5
console.log("\n" + "Problem 5");

const cities = [
  { name: "New York", temperature: 25 },
  { name: "Los Angeles", temperature: 30 },
  { name: "Chicago", temperature: 20 }
];

const temperatureInFahrenheit = cities.map((city) => ({...city, temperature: (9/5 * city.temperature) + 32}))
console.log("Temperatures in Fahrenehit:", temperatureInFahrenheit)


//Program 6
console.log("\n" + "Problem 6");

const teachers = [
  { name: "Olivia", monthlySalary: 4500 },
  { name: "Paul", monthlySalary: 5500 },
  { name: "Rachel", monthlySalary: 5000 },
];

const annualIncome = teachers.map((teacher) => ({...teacher, annualIncome:(12 * teacher.monthlySalary) + 500}))

console.log("Annual Income is:", annualIncome);


//Program 7
console.log("\n" + "Problem 7");

const countries = [
  { name: "USA", population: 331000000, landArea: 9833517 },
  { name: "India", population: 1393000000, landArea: 2973190 },
  { name: "Brazil", population: 213993437, landArea: 8515767 },
];

const populationDensity = countries.map((country) => ({...country, populationDensity: country.population/country.landArea}))

console.log("Population Density: ", populationDensity);


//Program 1
console.log("Problem 1");

const smartphones = [
  { brand: "iPhone", year: 2019, cameraResolution: 12.2 },
  { brand: "Samsung", year: 2021, cameraResolution: 13 },
  { brand: "Google Pixel", year: 2018, cameraResolution: 11 },
];
const newSmartphones = smartphones.filter((smartphone) => ((smartphone.year > 2020) && (smartphone.cameraResolution > 12)));
console.log(newSmartphones);


//Program 2
console.log("\n" + "Problem 2");

const books = [
  { title: "The Da Vinci Code", year: 2003, pages: 454 },
  { title: "The Alchemist", year: 1988, pages: 197 },
  { title: "The Hunger Games", year: 2008, pages: 374 },
];
const smallBooks = books.filter((book) =>(book.year > 2005) &&(book.pages < 400));
console.log(smallBooks);


//Program 3
console.log("\n" + "Problem 3");

const students = [
  { name: "Alice", age: 20, gpa: 3.8 },
  { name: "Bob", age: 17, gpa: 3.2 },
  { name: "Charlie", age: 19, gpa: 3.9 },
];
const lowGradeStudents = students.filter((student) => (student.age > 18) && (student.gpa > 3.5));
console.log(lowGradeStudents);


//Program 4
console.log("\n" + "Problem 4");

const employees = [
  { name: "Emily", salary: 55000, hireYear: 2008 },
  { name: "David", salary: 48000, hireYear: 2012 },
  { name: "Grace", salary: 60000, hireYear: 2006 },
];
const groupEmployees = employees.filter((employee) => (employee.salary > 50000) && (employee.hireYear > 2010));
console.log(groupEmployees);


//Program 5
console.log("\n" + "Problem 5");

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
  { name: "Smartphone", price: 800, inStock: true },
];
const productWithStock = products.filter((product) => (product.price > 100) && (product.inStock === true) )
console.log(productWithStock);


//Program 6
console.log("\n" + "Problem 6");

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure" },
  { title: "The Dune", year: 2018, rating: 6.0, genre: "Action" },
];
const lowerRatedMovies = movies.filter((movie) =>(movie.rating > 8.0) && (movie.genre === "action"));
console.log(lowerRatedMovies);


//Program 7
console.log("\n" + "Problem 7");

const apartments = [
  { location: "Downtown", price: 1600, bedrooms: 2, safeNeighbourhood: true },
  { location: "Suburb", price: 1400, bedrooms: 1, safeNeighbourhood: false },
  { location: "City Center", price: 1800, bedrooms: 3, safeNeighbourhood: true },
];
const luxirousApartments = apartments.filter((apartment) =>(apartment.price > 1500) && (apartment.safeNeighbourhood === true) && (apartment.bedrooms >= 2) );
console.log(luxirousApartments);


//Program 8
console.log("\n" + "Problem 8");

const produucts = [
  { name: "Laptop", price: 800, onlineAvailability: true, category: "Electronics" },
  { name: "Book", price: 20, onlineAvailability: false, category: "Literature" },
  { name: "Book", price: 40, onlineAvailability: false, category: "Classic" },
  { name: "Headphones", price: 60, onlineAvailability: true, category: "Electronics" },
];
const availableProduucts = produucts.filter((produuct) => (produuct.price > 50) && (produuct.onlineAvailability === true) && (produuct.category === "Electronics"));
console.log(availableProduucts);


//Program 9
console.log("\n" + "Program 9");

const jobApplicants = [
  { name: "Alice", experienceYears: 4, englishProficiency: true, relevantDegree: true },
  { name: "Bob", experienceYears: 2, englishProficiency: false, relevantDegree: true },
  { name: "Charlie", experienceYears: 5, englishProficiency: true, relevantDegree: false },
];
const degreeHolders = jobApplicants.filter((jobApplicant) => (jobApplicant.experienceYears > 3) && (jobApplicant.englishProficiency === true) && (jobApplicant.relevantDegre === true ));
console.log(degreeHolders);


//Program 10
console.log("\n" + "Problem 10");

const restaurants = [
  { name: "Gourmet Grill", stars: 4.5, vegetarianOptions: true, location: "City" },
  { name: "Fast Noodles", stars: 3.8, vegetarianOptions: false, location: "Suburb" },
  { name: "Healthy Bites", stars: 4.2, vegetarianOptions: true, location: "City" },
  { name: "Chat Street", stars: 3.5, vegetarianOptions: false, location: "Suburb" },
];
const onlyVegHotels = restaurants.filter((restaurant) => (restaurant.stars > 4.0) && (restaurant.vegetarianOptions === true) && (restaurant.location === 'City'));
console.log(onlyVegHotels);


//Program 11
console.log('\n' + "Problem 11");

const bookks = [
  { title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery" },
  { title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama" },
  { title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller" },
];
const modernBookks = bookks.filter((bookk) => (bookk.year > 2000) && (bookk.rating > 7.5) && ( (bookk.genre === "Mystery") || (bookk.genre === "Thriller")));
console.log(modernBookks);


//Program 12
console.log("\n" + "Problem 12");

const empployees = [
  { name: "David", experienceYears: 6, englishProficiency: true, department: "Engineering" },
  { name: "Emma", experienceYears: 4, englishProficiency: false, department: "Finance" },
  { name: "Alex", experienceYears: 7, englishProficiency: true, department: "Marketing" },
];
const subGroupEmployees = empployees.filter((empployees) => ((empployees.experienceYears > 5) && (empployees.englishProficiency === true) && (empployees.department === "Engineering"|| empployees.department === "Marketing")));
console.log(subGroupEmployees);